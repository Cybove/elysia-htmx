export const Main = () => /*html*/`
  <div class="flex flex-col space-y-10 mt-10 items-center h-screen">
    <h1 class="text-6xl font-bold underline text-red-500">Header</h1>
    <p class="text-3xl font-bold underline text-green-500">Paragraph</p>
    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2" hx-get="/click" hx-target="#data" hx-swap="innerHTML">Click</button>
    <div id="data" />
  </div>
`;