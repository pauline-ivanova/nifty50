# Использование авторов в статьях

## Добавление автора в MDX файлы

Чтобы добавить автора к статье, используйте поля `author` и `reviewer` в frontmatter:

```yaml
---
title: "What Is the Nifty 50? A Beginner's Breakdown"
excerpt: "Learn everything about India's premier stock market index..."
category: "Basics"
datePublished: "2024-11-29"
dateModified: "2024-12-15"
author: "priya-sharma"  # slug автора из lib/authors.ts
reviewer: "ananya-reddy"  # slug рецензента (опционально)
faqs:
  - question: "..."
    answer: "..."
---
```

## Доступные авторы

Все доступные авторы определены в `lib/authors.ts`:

1. **priya-sharma** - Chief Editor & Senior Financial Analyst
2. **arjun-patel** - Senior Investment Research Analyst
3. **meera-krishnan** - Market Research Specialist & Index Analyst
4. **vikram-singh** - Financial Content Strategist & Writer
5. **ananya-reddy** - Quantitative Data Analyst & Research Specialist

## Рекомендации по выбору автора

- **Общие статьи о Nifty 50, индексах**: `priya-sharma` или `meera-krishnan`
- **Обзоры брокеров, сравнения**: `arjun-patel`
- **Образовательные гайды для начинающих**: `vikram-singh`
- **Статьи с глубоким анализом данных**: `ananya-reddy`
- **Рецензенты**: обычно `ananya-reddy` для фактчекинга или `priya-sharma` для редакторского обзора

## Релевантная специализация автора (EEAT)

Для улучшения EEAT (Experience, Expertise, Authoritativeness, Trustworthiness) система автоматически определяет наиболее релевантную специализацию автора на основе:
- Категории статьи
- Заголовка статьи
- Доступных специализаций автора

**Пример:** Для статьи о Nifty 50 система автоматически подберёт "Indian Stock Indices (Nifty 50, Sensex)" для Priya Sharma, вместо просто её должности.

### Кастомная специализация

Если нужно указать специфическую экспертизу для конкретной статьи, используйте поле `authorExpertise`:

```yaml
---
author: "priya-sharma"
authorExpertise: "Expert in Nifty 50 index analysis and large-cap investments"  # опционально
reviewer: "ananya-reddy"
---
```

Если `authorExpertise` не указан, система автоматически подберёт наиболее релевантную специализацию.

## Что происходит автоматически

1. **Schema.org Person** - автоматически добавляется в JSON-LD
2. **Информация об авторе в Hero** - отображается в hero section с релевантной специализацией
3. **Ссылка на страницу автора** - кликабельная ссылка на `/authors/[slug]`
4. **Информация о рецензенте** - показывается с его экспертизой (например, "Data validation expert")

## Пример обновления существующей статьи

```yaml
---
title: "What Is the Nifty 50? A Beginner's Breakdown"
excerpt: "..."
category: "Basics"
datePublished: "2024-11-29"
dateModified: "2024-12-15"
author: "priya-sharma"  # Добавить эту строку
reviewer: "ananya-reddy"  # Добавить эту строку (опционально)
---
```

## Fallback поведение

Если `author` не указан в frontmatter:
- Используется "Our Editorial Research Team" как Organization
- Отображается стандартный блок редакции
- Schema.org использует Organization вместо Person

Это обеспечивает обратную совместимость со старыми статьями.

