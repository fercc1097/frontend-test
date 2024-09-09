# Frontend Coding Interview Test

We recommend (although not required) to use the following languages, libraries, components: **TypeScript**, **React Query** or **RSC**, **Tailwind**, **shadcnUI**, **Next.js Image component**, and **zod** (for API output validation).

## How to use

Clone using the following command:

```bash

git  clone  https://github.com/mmiro-balize/frontend-test.git

```

Navigate to the `frontend-test` directory and run the following command:

```bash

npm  install

```

To run the project, use the following command:

```bash

npm  run  dev

```

## Requirements

1.  **Fetch Pokémon Data:**

- Use the Pokémon API endpoint: `https://pokeapi.co/api/v2/pokemon` to fetch a list of Pokémon.

- The API returns a JSON object with the following structure:

```typescript
{
  count: number; // Total number of Pokémon

  next: string | null; // URL for the next page of results

  previous: string | null; // URL for the previous page of results

  results: {
    name: string;

    url: string;
  }

  []; // List of Pokémon
}
```

2.  **Create Initial Data Table:**

- Render the Pokémon in a data table with a single column:

- **Name:** Display the name of the Pokémon.

- At this stage, only the "Name" column should be populated since this is the only data available after the initial API fetch.

3.  **Enhance Data Table with Additional Columns:**

- For each Pokémon in the table, use the `url` provided in the `results` to fetch additional details from each Pokémon's individual endpoint.

- - The API returns a JSON object with the following structure:

```typescript
{
  id: number;

  sprites: {
    front_default: string;
  } // Image URLs

  types: {
    slot: number;

    type: {
      name: string;
    }
  }

  [];
}
```

- Add two new columns to the data table:

- **Image:** Fetch and display each Pokémon's image (sprite).

- **Types:** Fetch and display each Pokémon's types.

4.  **Pagination or Infinite Scroll:**

- Implement either pagination or infinite scrolling to allow fetching and displaying the next set of Pokémon using the `next` property from the API response.

- If pagination is chosen, provide controls to navigate between pages.

- If infinite scrolling is chosen, automatically fetch and display the next set of Pokémon as the user scrolls down.

5.  **Skeleton Loading State:**

- Render a skeleton data table while the API data is being fetched.

- Style the skeleton table to match the design of the final data table (e.g. using the same colors, column widths, etc.).

- The table must cleary indicate that the data is being fetched (e.g. with animated skeleton elements).

## Results

**stack:** next.js, shadcn, react-virtuoso, react-intersection-observer, zod, tailwind, react-query, typescript.

##

- Use the Pokémon API endpoint: `https://pokeapi.co/api/v2/pokemon` to fetch a list of Pokémon. ✅
- Render the table with the data from the first fetch ✅
- Render the table with skeletons as placeholders for image and types ✅
- Intersection observer for fetching data as needed ✅
- Zod validation with schemas ✅
- Infinite scroll ✅

## Extras

- Added table virtualization (react-virtuoso) so we can render all pokemons without performance issues.
- Structured the project and files following the best practices ( SOLID, KISS, DRY... )
- All files are with less than 150 lines
- Did't use "any" type on the project
- Added a Button that shows a pokedex inspired by [Bidji's CSS Art](https://codepen.io/Bidji/pen/MYdPwo)
- Used parallel routing and intersectors. When you open the pokedex you can notice that the url changes. If you share that url or refresh the page, you will see just the information that you shared (like Instagram)

**To do**

- Add dark theme or remove the existing styles related for that.
- Make pokedex buttons work
- Pre fetch data when user hover details button
- Populate first table on server side
- Fix bug that show images outside the screen of the pokedex
- I did a POC of zustand (wasn't needed ) and I'm not sure if deleted all the related files and dependencies.
