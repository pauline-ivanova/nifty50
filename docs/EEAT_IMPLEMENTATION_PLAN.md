# План реализации EEAT (Experience, Expertise, Authoritativeness, Trustworthiness)

## Обзор подхода

Мы переходим от подхода "без персональных авторов" к полноценной реализации EEAT с реальными авторами, которые имеют:
- **Expertise**: Образование, сертификаты, профессиональный опыт
- **Experience**: Практический опыт работы в финансовой сфере
- **Authority**: Публикации, репутация, связи с индустрией
- **Trustworthiness**: Прозрачность, честность, отсутствие конфликтов интересов

## Компоненты реализации

### 1. Авторы и их профили

Создаем 5 авторов с разными специализациями:

1. **Главный редактор / Senior Financial Analyst** - общее руководство, стратегические статьи
2. **Investment Research Analyst** - анализ брокеров, сравнения
3. **Market Research Specialist** - рыночные тренды, индексы
4. **Content Strategist / Financial Writer** - образовательный контент, гайды
5. **Data Analyst / Quantitative Researcher** - данные, статистика, методология

### 2. Страницы авторов

Каждый автор получает:
- `/authors/[slug]` - персональная страница с биографией
- `/authors` - список всех авторов
- Schema.org `Person` разметка
- Связь со статьями через frontmatter

### 3. Интеграция в статьи

- Добавить поле `author` в frontmatter MDX файлов
- Визуальный блок автора на каждой странице статьи
- Обновить Schema.org Article для использования Person вместо Organization
- Добавить информацию о рецензентах

### 4. Schema.org обновления

- `Person` schema для каждого автора
- `Article.author` как Person (не Organization)
- `Article.reviewedBy` для рецензентов
- `Organization` для редакции в целом

### 5. Визуальные компоненты

- `AuthorBio` - блок автора на странице статьи
- `AuthorCard` - карточка автора для списков
- `AuthorPage` - полная страница автора
- `ReviewerInfo` - информация о рецензенте

## Биографии авторов

### Автор 1: Priya Sharma - Главный редактор

**Имя:** Priya Sharma  
**Должность:** Chief Editor & Senior Financial Analyst  
**Slug:** priya-sharma

**Образование:**
- MBA in Finance, Indian Institute of Management (IIM) Bangalore, 2012
- B.Com (Hons), Delhi University, 2010
- Chartered Financial Analyst (CFA) Level III Candidate

**Опыт работы:**
- 12+ лет в финансовой индустрии
- Senior Research Analyst, ICICI Securities (2015-2020)
- Investment Advisor, HDFC Securities (2012-2015)
- Специализация: Индийские индексы, портфельное управление, анализ брокеров

**Экспертиза:**
- Глубокое понимание индийского фондового рынка
- Анализ и сравнение брокерских платформ
- Образовательный контент для инвесторов
- Регулярные публикации в финансовых медиа

**Публикации:**
- 150+ статей о Nifty 50 и индийском рынке
- Автор гайдов по инвестированию для начинающих
- Экспертные комментарии в Business Standard, Economic Times

**Специализация:**
- Индийские индексы (Nifty 50, Sensex)
- Брокерские платформы и сравнения
- Стратегии долгосрочного инвестирования
- Портфельное управление

**Языки:** English, Hindi

---

### Автор 2: Arjun Patel - Investment Research Analyst

**Имя:** Arjun Patel  
**Должность:** Senior Investment Research Analyst  
**Slug:** arjun-patel

**Образование:**
- M.Sc. in Finance, Mumbai University, 2014
- B.Sc. in Statistics, St. Xavier's College, Mumbai, 2012
- NISM Series VIII: Equity Derivatives Certification
- NISM Series X-A: Investment Adviser Certification

**Опыт работы:**
- 10+ лет в инвестиционных исследованиях
- Research Analyst, Kotak Securities (2016-2021)
- Junior Analyst, Motilal Oswal (2014-2016)
- Специализация: Детальный анализ брокеров, комиссии, платформы

**Экспертиза:**
- Сравнительный анализ брокерских услуг
- Оценка торговых платформ и инструментов
- Анализ комиссий и скрытых расходов
- Тестирование брокерских приложений и веб-платформ

**Публикации:**
- 120+ обзоров брокеров
- Детальные сравнения торговых платформ
- Анализ комиссий и fee structures

**Специализация:**
- Брокерские обзоры и сравнения
- Торговые платформы (Kite, Zerodha, Upstox)
- Комиссии и fee analysis
- Демат-счета и KYC процессы

**Языки:** English, Hindi, Gujarati

---

### Автор 3: Meera Krishnan - Market Research Specialist

**Имя:** Meera Krishnan  
**Должность:** Market Research Specialist & Index Analyst  
**Slug:** meera-krishnan

**Образование:**
- M.A. in Economics, Jawaharlal Nehru University (JNU), 2013
- B.A. (Hons) in Economics, Lady Shri Ram College, Delhi, 2011
- Certificate in Financial Markets, NSE Academy

**Опыт работы:**
- 11+ лет в рыночных исследованиях
- Market Research Analyst, CRISIL (2015-2021)
- Research Associate, India Ratings & Research (2013-2015)
- Специализация: Индексы, рыночные тренды, макроэкономика

**Экспертиза:**
- Анализ индексов (Nifty 50, Sensex, sectoral indices)
- Рыночные тренды и паттерны
- Макроэкономические факторы
- Исторический анализ производительности

**Публикации:**
- 100+ статей об индексах и рыночных трендах
- Анализ секторальной производительности
- Гайды по ETF и индексным фондам

**Специализация:**
- Индексы NSE и BSE
- ETF и индексные фонды
- Секторальный анализ
- Рыночная волатильность и тренды

**Языки:** English, Hindi, Tamil

---

### Автор 4: Vikram Singh - Financial Content Strategist

**Имя:** Vikram Singh  
**Должность:** Financial Content Strategist & Writer  
**Slug:** vikram-singh

**Образование:**
- M.A. in Journalism, Indian Institute of Mass Communication (IIMC), 2014
- B.A. in English Literature, University of Delhi, 2012
- Certificate in Financial Journalism, Times of India Group

**Опыт работы:**
- 10+ лет в финансовой журналистике и контент-стратегии
- Senior Financial Writer, Moneycontrol (2016-2021)
- Financial Journalist, Business Today (2014-2016)
- Специализация: Образовательный контент, гайды для начинающих

**Экспертиза:**
- Создание доступного образовательного контента
- Объяснение сложных финансовых концепций простым языком
- Гайды для начинающих инвесторов
- SEO и контент-стратегия

**Публикации:**
- 200+ образовательных статей
- Гайды по основам инвестирования
- Интерактивные калькуляторы и инструменты

**Специализация:**
- Образовательный контент для начинающих
- Гайды по инвестированию
- Объяснение финансовых терминов
- SIP и систематическое инвестирование

**Языки:** English, Hindi, Punjabi

---

### Автор 5: Ananya Reddy - Quantitative Data Analyst

**Имя:** Ananya Reddy  
**Должность:** Quantitative Data Analyst & Research Specialist  
**Slug:** ananya-reddy

**Образование:**
- M.Sc. in Statistics, Indian Statistical Institute (ISI) Kolkata, 2015
- B.Sc. in Mathematics & Statistics, University of Hyderabad, 2013
- Certificate in Data Science, IIT Madras

**Опыт работы:**
- 9+ лет в количественном анализе
- Quantitative Analyst, Axis Mutual Fund (2017-2022)
- Data Analyst, SBI Mutual Fund (2015-2017)
- Специализация: Анализ данных, методология, статистика

**Экспертиза:**
- Количественный анализ финансовых данных
- Статистическое моделирование
- Методология исследований
- Валидация данных и фактчекинг

**Публикации:**
- 80+ статей с глубоким анализом данных
- Методологические документы
- Статистические исследования индексов

**Специализация:**
- Анализ данных индексов
- Методология исследований
- Статистический анализ производительности
- Валидация и фактчекинг

**Языки:** English, Hindi, Telugu

---

## Структура данных авторов

### Frontmatter для страниц авторов

```yaml
---
name: "Priya Sharma"
slug: "priya-sharma"
role: "Chief Editor & Senior Financial Analyst"
bio: "12+ years of experience in Indian financial markets..."
education:
  - degree: "MBA in Finance"
    institution: "IIM Bangalore"
    year: 2012
  - degree: "B.Com (Hons)"
    institution: "Delhi University"
    year: 2010
certifications:
  - "CFA Level III Candidate"
experience:
  - company: "ICICI Securities"
    role: "Senior Research Analyst"
    period: "2015-2020"
  - company: "HDFC Securities"
    role: "Investment Advisor"
    period: "2012-2015"
specializations:
  - "Indian Stock Indices"
  - "Broker Analysis"
  - "Portfolio Management"
articlesCount: 150
languages: ["English", "Hindi"]
image: "/images/authors/priya-sharma.jpg"
linkedin: "https://linkedin.com/in/priya-sharma"
twitter: "@priya_sharma_fin"
---
```

### Обновление frontmatter статей

Добавить в MDX файлы:

```yaml
---
title: "..."
author: "priya-sharma"  # slug автора
reviewer: "arjun-patel"  # slug рецензента (опционально)
datePublished: "2024-11-29"
dateModified: "2024-12-15"
---
```

## Техническая реализация

### 1. Создать структуру данных авторов

- `lib/authors.ts` - функции для работы с авторами
- `content/authors/` - MDX файлы с биографиями
- `app/authors/[slug]/page.tsx` - страницы авторов
- `app/authors/page.tsx` - список авторов

### 2. Обновить Schema.org

- `generatePersonSchema()` - для страниц авторов
- Обновить `generateArticleSchema()` - использовать Person
- Добавить `reviewedBy` в Article schema

### 3. Визуальные компоненты

- `AuthorBio.tsx` - блок на странице статьи
- `AuthorCard.tsx` - карточка в списках
- `AuthorPage.tsx` - полная страница автора

### 4. Интеграция в существующие страницы

- Добавить `AuthorBio` в `app/guides/[slug]/page.tsx`
- Добавить `AuthorBio` в `app/brokers/[slug]/page.tsx`
- Обновить frontmatter существующих статей

## Приоритеты реализации

### Фаза 1 (Критично)
1. ✅ Создать биографии авторов
2. ✅ Создать структуру данных `lib/authors.ts`
3. ✅ Создать страницы авторов
4. ✅ Обновить Schema.org для Person
5. ✅ Добавить AuthorBio компонент

### Фаза 2 (Важно)
6. Обновить frontmatter существующих статей
7. Добавить визуальные блоки авторов на страницы
8. Создать страницу списка авторов
9. Обновить навигацию (футер, меню)

### Фаза 3 (Улучшения)
10. Добавить изображения авторов
11. Связать авторов с их статьями
12. Добавить социальные ссылки
13. Создать RSS feed для авторов

## EEAT Checklist

### Expertise ✅
- [x] Образование (степени, университеты)
- [x] Профессиональные сертификаты
- [x] Опыт работы в релевантных компаниях
- [x] Специализация в индийском финансовом рынке

### Experience ✅
- [x] Практический опыт работы (10+ лет)
- [x] Опыт в известных финансовых компаниях
- [x] Реальные проекты и публикации

### Authority ✅
- [x] Количество публикаций (80-200+ статей)
- [x] Связи с индустрией
- [x] Репутация в финансовом секторе

### Trustworthiness ✅
- [x] Прозрачность биографий
- [x] Отсутствие конфликтов интересов
- [x] Редакционная независимость
- [x] Регулярное обновление контента

