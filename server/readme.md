# react-pizza-api
Api for application "react-pizza-v2".

## Usage

**Get Pizzas**
----
Returns json data about pizzas in a shop.

<details>

* **URL**

    /product

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    **Optional:**
 
    `page=[number]`
  
    `size=[number]`

    `category=[number]`

    `order=["ASC" | "DESC"]`

    `sort=[string]`
    
    `search=[string]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
        "count": 7,
        "rows": [
            {
                "id": 1,
                "imageUrl": "d0b0fd3a-7b25-4492-922b-ca90f8808114.jpg",
                "title": "Пепперони Фреш с перцем",
                "price": 803,
                "rating": 0,
                "recipe": "",
                "types": [0,1],
                "sizes": [26,30,40],
                "createdAt": "2023-12-22T07:10:03.225Z",
                "updatedAt": "2023-12-22T07:10:03.225Z",
                "typeId": 1,
                "categoryId": 4,
                "sizeId": 1
            },
            ...
        ]
    }
    ```
* **Error Response:**

    None

* **Notes:**

    None

</details>

**Get Pizza**
----
Returns json data about specified pizza.

<details>

* **URL**

    /product/:id

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

     **Required:**
 
    `id=[number]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
        {
            "id": 1,
            "imageUrl": "d0b0fd3a-7b25-4492-922b-ca90f880811    jpg",
            "title": "Пепперони Фреш с перцем",
            "price": 803,
            "rating": 0,
            "recipe": "",
            "types": [0,1],
            "sizes": [26,30,40],
            "createdAt": "2023-12-22T07:10:03.225Z",
            "updatedAt": "2023-12-22T07:10:03.225Z",
            "typeId": 1,
            "categoryId": 4,
            "sizeId": 1
        },
    ```
* **Error Response:**

     * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    {
        "message": "NOT FOUND"
    }
    ```

* **Notes:**

    None

</details>

**Create Pizza**
----
Creates a new pizza in a shop.

<details>

* **URL**

    /product

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'form-data'`

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    | Key           | Value                     | type  |
    | ------------- | ------------------------- | ----- |
    | imageUrl      | /D:/Грушевский/..         | file  |   
    | title         | Пепперони                 | text  |
    | types         | 0, 1                      | text  |
    | sizes         | 30, 40                    | text  |
    | price         | 580                       | text  |
    | rating        | 0                         | text  |
    | recipe        | Рецепт пиццы пепперони    | text  |
    | typeId        | 1                         | text  |
    | categoryId    | 5                         | text  |
    | sizeId        | 1                         | text  |

    ```typescript
      {
        imageUrl: string
        title: string,
        types: number[],
        sizes: number[],
        price: number,
        rating: number,
        recipe: string,
        typeId: number,
        categoryId: number,
        sizeId: number
      }
    ```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
        "id": 2,
        "imageUrl": "deb39d25-8a4e-4f9d-b07b-ec5a10d70731.jpg",
        "title": "Пепперони",
        "types": [0, 1],
        "sizes": [30, 40],
        "price": 580,
        "rating": 0,
        "recipe": "Рецепт пиццы Пепперони",
        "typeId": 1,
        "categoryId": 5,
        "sizeId": 1,
        "updatedAt": "2023-12-28T09:48:36.198Z",
        "createdAt": "2023-12-28T09:48:36.198Z"
    }
    ```
 
* **Error Response:**

     * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        {
            "message": "повторяющееся значение ключа нарушает   ограничение уникальности \"products_title_key\""
        }
        ```

* **Notes:**

    None

</details>

**Delete Pizza**
----
Delete specified pizza from a shop

<details>

* **URL**

    /product/:id

* **Method:**

    `DELETE`

* **Headers:**

    None

*  **URL Params**

    **Required:**
 
    `id=[number]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
        "id": 44,
        "imageUrl": "deb39d25-8a4e-4f9d-b07b-ec5a10d70731.jpg",
        "title": "Пепперони много лука",
        "price": 580,
        "rating": 0,
        "recipe": "Рецепт пиццы Пепперони много лука",
        "types": [
            0
        ],
        "sizes": [
            30,
            40
        ],
        "createdAt": "2023-12-28T09:48:36.198Z",
        "updatedAt": "2023-12-28T09:48:36.198Z",
        "typeId": 1,
        "categoryId": 5,
        "sizeId": 1
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    {
        "message": "NOT FOUND"
    }
    ```

* **Notes:**

    None

</details>

**Update Pizza**
----
Updates attributes of specified pizza.

<details>

* **URL**

    /product/:id

* **Method:**

    `PUT`

* **Headers:**

    `'Content-Type': 'form-data'`

*  **URL Params**

    **Required:**

    `id=[number]`

* **Query Params**

    None

* **Data Params**

    | Key           | Value                     | type  |
    | ------------- | ------------------------- | ----- |
    | imageUrl      | /D:/Грушевский/..         | file  |   
    | title         | Пепперони                 | text  |
    | types         | 0, 1                      | text  |
    | sizes         | 30, 40                    | text  |
    | price         | 580                       | text  |
    | rating        | 0                         | text  |
    | recipe        | Рецепт пиццы пепперони    | text  |
    | typeId        | 1                         | text  |
    | categoryId    | 5                         | text  |
    | sizeId        | 1                         | text  |

    ```typescript
      {
        imageUrl: string
        title: string,
        types: number[],
        sizes: number[],
        price: number,
        rating: number,
        recipe: string,
        typeId: number,
        categoryId: number,
        sizeId: number
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
        {
            "id": 44,
            "imageUrl": "deb39d25-8a4e-4f9d-b07b-ec5a10d70731.jpg",
            "title": "Пепперони много лука",
            "price": 580,
            "rating": 0,
            "recipe": "Рецепт пиццы Пепперони много лука",
            "types": [0],
            "sizes": [30,40],
            "createdAt": "2023-12-28T09:48:36.198Z",
            "updatedAt": "2023-12-28T09:48:36.198Z",
            "typeId": 1,
            "categoryId": 5,
            "sizeId": 1
        }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {}
    ```

* **Notes:**

    None

</details>
