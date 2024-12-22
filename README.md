# React + TypeScript + Vite

This project is powered with React, Vite and Typescript, using with HMR and some basic ESLint rules.

## How to run
1. In project root folder, run `npm install`
2. Once done, run `npm run dev`
3. There are more out-of-the-box commands such as linting the project `npm run lint`, and preview `npm run preview`

## Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [ag-grid-react] for the user table and [@ag-grid-community/core] for customization support
- [plotly.js-dist-min] for data visualization (minified version)
- [react-plotly.js] to be able to create a factory React component of plotly
- [react-icons](https://react-icons.github.io/react-icons) lightweight React lib for icons

## A bit about the task

I had a fun time working on this exercise! 
The most time-consuming part for me was definitely working with ag-grid and all of the styles in order to match the given snapshot.
Exact styling is quite time consuming mainly when you are also dealing with data structures, on my case had to learn the ag grid api as well.
Plotly was pretty out of the box, but I had to research on CSV download logic, was my last thing to accomplish and there were not much more time left.

Pros and Cons:
I liked the way of using context to avoid prop drilling, and I took a bit care to ensure good usage of memoization..
These data in table stuff can become quite heavy depending on the data size that we have to load. Potentially it can go to thousands of records :(

That would be a cons, not sure about how performatic would it be. I briefly saw in the ag grid API that they have some support for performance improvements, including scrolling, cache and mainly DOM Virtualization. That could be something interesting to check later.

In total, I spend half a day on my first day, then a full day today.
If I had more time, would brush up a little more and include loading states in the app, simulating data fetch, instead of simply using hard coded data. Also would take a quick look on AgGridReact TS issue, before when I was using it as a module from @ag-grid-community it worked fine.
Also would think of rewriting a bit of the CSS, either with some pre-processor, that should do the job, or maybe with tailwind.



