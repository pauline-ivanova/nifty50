'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Fallback sections for home page (if auto-detection fails)
const homePageSections = [
  { id: 'how-to-invest', title: 'How to Invest' },
  { id: 'top-guides', title: 'Top Guides' },
  { id: 'official-resources', title: 'Resources' },
  { id: 'why-indians-invest', title: 'Why Nifty 50' },
  { id: 'market-overview', title: 'Market Overview' },
  { id: 'popular-broker-comparisons', title: 'Brokers' },
  { id: 'learning-hub', title: 'Learning Hub' },
  { id: 'trust-transparency', title: 'Trust' },
];

// Helper function to get section title from element
function getSectionTitle(element: HTMLElement): string {
  // First, check for data-title attribute (explicit title)
  const dataTitle = element.getAttribute('data-title');
  if (dataTitle) return dataTitle;

  // Try to find a heading (h1, h2, h3, h4) within the section (prefer h2, then h3, then others)
  const h2 = element.querySelector('h2');
  if (h2) return h2.textContent?.trim() || '';
  
  const h3 = element.querySelector('h3');
  if (h3) return h3.textContent?.trim() || '';
  
  const heading = element.querySelector('h1, h4, h5, h6');
  if (heading) {
    return heading.textContent?.trim() || '';
  }

  // Try to find heading before the section (look up to 3 levels up in DOM tree)
  let searchElement: Element | null = element.previousElementSibling;
  let searchDepth = 0;
  while (searchElement && searchDepth < 3) {
    if (searchElement.tagName.match(/^H[1-6]$/)) {
      return searchElement.textContent?.trim() || '';
    }
    // Also check children of previous element
    const childHeading = searchElement.querySelector('h2, h3');
    if (childHeading) {
      return childHeading.textContent?.trim() || '';
    }
    searchElement = searchElement.previousElementSibling;
    searchDepth++;
  }

  // Try to find heading in parent container
  let parent = element.parentElement;
  let parentDepth = 0;
  while (parent && parentDepth < 2) {
    const parentHeading = parent.querySelector('h2, h3');
    if (parentHeading && parentHeading.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING) {
      return parentHeading.textContent?.trim() || '';
    }
    parent = parent.parentElement;
    parentDepth++;
  }

  // Fallback: use id with formatting
  const id = element.id;
  return id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Generate ID from text (for headings without id)
function generateIdFromText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Auto-detect sections on the page - привязка к H2 заголовкам
function detectSections(pathname: string = ''): Array<{ id: string; title: string }> {
  if (typeof window === 'undefined') return [];

  const sections: Array<{ id: string; title: string }> = [];
  const excludedIds = ['hero', 'site-footer', 'root', 'main', '__next'];
  const foundIds = new Set<string>();
  const isHomePage = pathname === '/' || pathname === '';

  // Основная стратегия: находим все H2 заголовки и создаем для них секции
  const headings = document.querySelectorAll('h2');
  const mainContent = document.querySelector('main') || document.body;
  
  headings.forEach((heading) => {
    // Пропускаем заголовки в исключенных областях
    const isInExcluded = heading.closest('header, footer, nav, aside');
    if (isInExcluded) return;
    
    // Пропускаем невидимые или слишком маленькие заголовки
    const rect = heading.getBoundingClientRect();
    if (rect.height < 10 || rect.width < 10) return;
    
    const title = heading.textContent?.trim() || '';
    if (!title || title.length < 2) return;
    
    // Ищем контейнер секции - сначала ищем родительский section, затем создаем обертку
    let container: HTMLElement | null = heading.closest('section');
    
    if (!container) {
      // Если нет section, ищем родительский элемент, который может быть секцией
      let parent = heading.parentElement;
      let depth = 0;
      while (parent && depth < 5) {
        // Ищем div, article или другой контейнер с достаточным контентом
        if (parent.tagName === 'SECTION' || parent.tagName === 'ARTICLE') {
          container = parent as HTMLElement;
          break;
        }
        // Или div с достаточной высотой
        if (parent.tagName === 'DIV') {
          const parentRect = parent.getBoundingClientRect();
          if (parentRect.height > 150) {
            container = parent as HTMLElement;
            break;
          }
        }
        parent = parent.parentElement;
        depth++;
      }
      
      // Если не нашли подходящий контейнер, используем родителя заголовка
      if (!container) {
        container = heading.parentElement;
      }
    }
    
    if (!container) return;
    
    // Определяем или создаем ID для секции
    let id = container.id;
    
    // Если у контейнера нет ID или он исключен, создаем новый из текста заголовка
    if (!id || excludedIds.includes(id) || foundIds.has(id)) {
      id = generateIdFromText(title);
      
      // Убеждаемся, что ID уникален
      let uniqueId = id;
      let counter = 1;
      while (foundIds.has(uniqueId) || document.getElementById(uniqueId)) {
        uniqueId = `${id}-${counter}`;
        counter++;
      }
      id = uniqueId;
      
      // Устанавливаем ID на контейнер
      container.id = id;
    }
    
    // Проверяем, что контейнер достаточно большой
    const containerRect = container.getBoundingClientRect();
    if (containerRect.height < 50) return; // Минимальная высота для секции
    
    // Добавляем секцию, если еще не добавлена
    if (!foundIds.has(id)) {
      sections.push({ id, title });
      foundIds.add(id);
    }
  });

  // Fallback: если не нашли H2, ищем элементы с ID (для домашней страницы)
  if (sections.length === 0 && isHomePage) {
    const allElements = document.querySelectorAll('[id]');
    
    allElements.forEach((element) => {
      const id = element.id;
      
      if (excludedIds.includes(id)) return;
      
      const rect = element.getBoundingClientRect();
      if (rect.height < 100) return;
      
      const title = getSectionTitle(element as HTMLElement);
      if (!title) return;

      if (!foundIds.has(id)) {
        sections.push({ id, title });
        foundIds.add(id);
      }
    });
  }

  // Сортируем секции по их позиции в DOM
  sections.sort((a, b) => {
    const elA = document.getElementById(a.id);
    const elB = document.getElementById(b.id);
    if (!elA || !elB) return 0;
    return elA.compareDocumentPosition(elB) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  });

  // Используем fallback для домашней страницы, если ничего не нашли
  return sections.length > 0 ? sections : (isHomePage ? homePageSections : []);
}

export default function DotNav() {
  const [activeSection, setActiveSection] = useState('');
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [sections, setSections] = useState<Array<{ id: string; title: string }>>([]);
  const pathname = usePathname();

  // Detect sections on mount and when page changes
  useEffect(() => {
    // Reset active section when page changes - будет установлена после определения секций
    setActiveSection('');
    
    // Small delay to ensure DOM is fully rendered
    const detectAndSetSections = () => {
      const detectedSections = detectSections(pathname);
      setSections(detectedSections);
      
      // Устанавливаем первую секцию как активную при первой загрузке
      if (detectedSections.length > 0) {
        setActiveSection(prev => prev || detectedSections[0].id);
      }
    };

    // Initial detection
    detectAndSetSections();

    // Re-detect after a short delay to catch dynamically loaded content
    const timeoutId = setTimeout(detectAndSetSections, 500);
    
    // Also re-detect after longer delay for pages with async content
    const longTimeoutId = setTimeout(detectAndSetSections, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(longTimeoutId);
    };
  }, [pathname]);

  useEffect(() => {
    if (sections.length === 0) return;

    // Упрощенная функция для определения активной секции
    const updateActiveSection = () => {
      if (sections.length === 0) return;
      
      // Проверяем, находимся ли мы в верхней части страницы (hero section)
      const scrollPosition = window.scrollY;
      const heroElement = document.getElementById('hero');
      
      // Если прокрутка в самом верху и hero section виден, устанавливаем 'hero'
      if (scrollPosition < 300 && heroElement) {
        const heroRect = heroElement.getBoundingClientRect();
        if (heroRect.bottom > window.innerHeight / 2) {
          setActiveSection('hero');
          return;
        }
      }
      
      const viewportCenter = window.innerHeight / 2;
      let activeId = sections[0]?.id || '';
      let minDistance = Infinity;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        const elementCenter = elementTop + (elementBottom - elementTop) / 2;

        // Расстояние от центра экрана до центра секции
        const distance = Math.abs(viewportCenter - elementCenter);

        // Если секция видна в viewport и ближе к центру
        if (elementTop < window.innerHeight && elementBottom > 0) {
          if (distance < minDistance) {
            minDistance = distance;
            activeId = section.id;
          }
        }
      });

      if (activeId) {
        setActiveSection(activeId);
      }
    };

    // Throttle для оптимизации
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    // Первоначальное обновление
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [sections]);

  useEffect(() => {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === footer) {
            setIsFooterVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(footer);

    return () => {
      observer.unobserve(footer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeIndex = sections.findIndex((s) => s.id === activeSection);
  
  // Если активная секция не найдена, используем первую
  const validActiveIndex = activeIndex >= 0 ? activeIndex : 0;

  const getVisibleSections = () => {
    if (sections.length === 0) return [];
    
    // Если секций 5 или меньше, показываем все
    if (sections.length <= 5) {
      return sections;
    }
    
    // Всегда показываем 5 точек вокруг активной
    const totalVisible = 5;
    const halfVisible = 2; // 2 точки с каждой стороны от активной
    
    // Вычисляем начальный индекс так, чтобы активная была в центре
    let start = validActiveIndex - halfVisible;
    let end = start + totalVisible;
    
    // Корректируем границы, если выходим за пределы массива
    if (start < 0) {
      start = 0;
      end = totalVisible;
    } else if (end > sections.length) {
      end = sections.length;
      start = end - totalVisible;
    }
    
    return sections.slice(start, end);
  };

  const visibleSections = getVisibleSections();

  // Don't show navigation if no sections found or footer is visible
  if (isFooterVisible || sections.length === 0) {
    return null;
  }
  
  // Не показываем навигацию на hero section
  if (activeSection === 'hero' || activeSection === '') {
    return null;
  }

  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <ul className="flex flex-col items-end space-y-4">
        {visibleSections.map((section) => {
          const sectionIndexInVisible = visibleSections.findIndex(s => s.id === section.id);
          const activeIndexInVisible = visibleSections.findIndex(s => s.id === activeSection);
          const distance = Math.abs(sectionIndexInVisible - activeIndexInVisible);

          let scale = 'scale-90';
          let opacity = 'opacity-100';
          let bgColor = 'bg-gray-500';

          if (distance === 0) { // Active - центральная, рыжая, больше
            scale = 'scale-125';
            opacity = 'opacity-100';
            bgColor = 'bg-brand-saffron';
          } else if (distance === 1) { // Ближайшие соседи - средний размер
            scale = 'scale-100';
            opacity = 'opacity-100';
            bgColor = 'bg-gray-500';
          } else if (distance === 2) { // Крайние точки - уменьшенный диаметр для динамики
            scale = 'scale-90';
            opacity = 'opacity-100';
            bgColor = 'bg-gray-500';
          }

          // Обрезаем длинные заголовки для навигации
          const displayTitle = section.title.length > 40 
            ? section.title.substring(0, 37) + '...' 
            : section.title;

          return (
            <li key={section.id} className="flex items-center group justify-end" style={{ height: '20px', width: '150px' }}>
              <span 
                className="mr-3 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900/50 rounded-md px-2 py-1 whitespace-nowrap text-right max-w-xs"
                title={section.title} // Полный текст в tooltip
              >
                {displayTitle}
              </span>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`rounded-full transition-all duration-300 ${bgColor} ${scale} ${opacity} group-hover:!bg-brand-saffron-hover group-hover:!opacity-100 shadow-md border-2 border-transparent`}
                aria-label={`Go to ${section.title} section`}
                style={{ 
                  width: distance === 0 ? '14px' : distance === 1 ? '12px' : '10px',
                  height: distance === 0 ? '14px' : distance === 1 ? '12px' : '10px',
                  minWidth: '10px',
                  minHeight: '10px'
                }}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
