### Products
---
- URL

    /product

- Method

    `Get`
    
- Query parameters:
```typescript
    {
        categoryId: number,
        search: string,
        order: string,
        sort: string,
        page: number,
        size: 2,
    }
```

- Returned value
```typescript
    {
        count: number,
        rows: {
            id: number,
            imageUrl: string,
            title: string,
            price: number,
            rating: number,
            recipe: string,
            types: number[],
            sizes: number[],
            createdAt: string,
            updatedAt: string,
            typeId: number,
            categoryId: number,
            sizeId: 1
        }[]
    }
```