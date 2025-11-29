# Система контроля метаданных и Schema

Система автоматической валидации метаданных и Schema.org разметки для всех страниц сайта.

## Обзор

Система проверяет:
- ✅ Наличие и корректность метаданных (title, description)
- ✅ Наличие и корректность Schema.org разметки (JSON-LD)
- ✅ Соответствие требованиям SEO (длина заголовков, описаний)
- ✅ Структуру данных в схемах

## Использование

### Базовый запуск

```bash
npm run validate:pages
```

### JSON вывод

```bash
npm run validate:pages:json
```

### Строгий режим

```bash
npm run validate:pages:strict
```

## Структура системы

### Утилиты валидации

- `lib/validation/metadata-validator.ts` - валидация метаданных
- `lib/validation/schema-validator.ts` - валидация Schema.org разметки
- `lib/validation/page-validator.ts` - валидация полных страниц
- `lib/validation/report-generator.ts` - генерация отчетов
- `lib/validation/types.ts` - типы и константы

### Скрипты

- `scripts/validate-pages.ts` - основной скрипт валидации

## Требования к метаданным

### Стандартные требования

- **Title**: обязателен, 30-60 символов
- **Description**: обязателен, 120-160 символов
- **Robots**: опционально

### Использование в коде

```typescript
import { validateMetadataInPlace, createMetadata } from '@/lib/validation/types';

// В generateMetadata
export async function generateMetadata({ params }: Props) {
  const { frontmatter } = await getBrokerData(params.slug);
  
  const metadata = createMetadata(
    frontmatter.title,
    frontmatter.description
  );
  
  // Валидация в dev режиме
  if (process.env.NODE_ENV === 'development') {
    const validation = validateMetadataInPlace(metadata);
    if (!validation.isValid) {
      console.warn(`Metadata validation failed for ${params.slug}:`, validation.errors);
    }
  }
  
  return metadata;
}
```

## Требования к Schema

### Обязательные схемы

- **BreadcrumbList**: для всех страниц с иерархией
- **FAQPage**: для страниц с FAQ
- **Article**: для страниц гайдов
- **Organization**: в корневом layout

### Структура валидации

Система проверяет:
- Наличие `@context` и `@type`
- Корректность структуры данных
- Наличие обязательных полей
- Корректность типов данных

## Отчеты

### Форматы отчетов

1. **Text** (по умолчанию) - читаемый текст в консоли
2. **JSON** - структурированные данные для автоматизации
3. **Markdown** - для документации

### Пример отчета

```
================================================================================
PAGE VALIDATION REPORT
================================================================================

Total Pages: 25
Valid Pages: 23 (92%)
Invalid Pages: 2 (8%)

Summary:
  Metadata Errors: 2
  Metadata Warnings: 5
  Schema Errors: 0
  Schema Warnings: 1

❌ Invalid Pages:
--------------------------------------------------------------------------------

/brokers/example-broker (dynamic)
  Metadata:
    ❌ Description is required but missing

/guides/example-guide (dynamic)
  Metadata:
    ❌ Title is too short (15 chars, recommended: 30+)
```

## Интеграция в CI/CD

### GitHub Actions пример

```yaml
name: Validate Pages

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run validate:pages
```

### Pre-commit hook

```bash
#!/bin/sh
npm run validate:pages
if [ $? -ne 0 ]; then
  echo "Validation failed. Please fix errors before committing."
  exit 1
fi
```

## Расширение системы

### Добавление новых типов страниц

1. Добавьте функцию валидации в `page-validator.ts`
2. Добавьте страницы в `validateAllPages()`
3. Обновите требования в `types.ts`

### Кастомные требования

```typescript
import { validateAllPages } from '@/lib/validation/page-validator';

const customMetadataRequirements = {
  requireTitle: true,
  requireDescription: true,
  minTitleLength: 40, // Строже
  maxTitleLength: 55,
  minDescriptionLength: 130,
  maxDescriptionLength: 155,
};

const report = await validateAllPages(customMetadataRequirements);
```

## Troubleshooting

### Проблема: "Metadata is missing"

**Решение**: Убедитесь, что страница экспортирует `metadata` или `generateMetadata`:

```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};
```

### Проблема: "Schema missing @context"

**Решение**: Убедитесь, что используете функции из `lib/schema.ts`:

```typescript
import { generateBreadcrumbSchema } from '@/app/components/common/JsonLd';

const schema = generateBreadcrumbSchema(breadcrumbItems);
```

### Проблема: "Title is too short"

**Решение**: Увеличьте длину заголовка до минимум 30 символов или измените требования:

```typescript
const requirements = {
  minTitleLength: 20, // Менее строго
};
```

## Best Practices

1. ✅ Запускайте валидацию перед каждым коммитом
2. ✅ Используйте строгий режим в CI/CD
3. ✅ Исправляйте предупреждения, не только ошибки
4. ✅ Документируйте исключения из требований
5. ✅ Регулярно обновляйте требования на основе аналитики

## Поддержка

При возникновении проблем:
1. Проверьте логи валидации
2. Убедитесь, что все зависимости установлены
3. Проверьте версию Node.js (требуется 18+)
4. Создайте issue с деталями проблемы

