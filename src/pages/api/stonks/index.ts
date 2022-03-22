import { withOGImage } from 'next-api-og-image';

interface GradientSetting {
  gradient: string;
  textColor: string;
}

const GRADIENT_VARIANT: { [key: string]: GradientSetting } = {
  1: {
    gradient: 'bg-gradient-to-tr from-purple-400 via-blue-200 to-purple-300',
    textColor: 'text-gray-700',
  },
  2: {
    gradient: 'bg-gradient-to-tr from-yellow-500 via-gray-200 to-yellow-600',
    textColor: 'text-gray-900',
  },
  3: {
    gradient: 'bg-gradient-to-br from-red-500 via-black to-blue-600',
    textColor: 'text-white',
  },
};

interface QueryParams {
  eName: string;
  eDate: string;
  pName: string;
  pImg: string;
  gv: string;
}

export default withOGImage<'query', QueryParams>({
  template: {
    html: async ({
      eName,
      eDate,
      pName,
      pImg = 'https://stonks.com/images/head.png',
      gv = '1',
    }) => {
      const gradiantVersion: GradientSetting = GRADIENT_VARIANT[gv];

      return `
          <html>
            <head>
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
            </head>
            <body class="flex flex-col items-center w-full ${gradiantVersion.gradient} h-screen">
              <img src=${pImg} class="h-40 mt-20" />
              <div class="flex justify-center w-full">
                <h1 class="text-8xl font-bold ${gradiantVersion.textColor}">${eName}</h1>
              </div>
              <div class="flex justify-center w-full ${gradiantVersion.textColor}">
                <h2 class="text-4xl mt-5 font-bold">By ${pName}</h2>
              </div>
              <div class="flex justify-center w-full ${gradiantVersion.textColor}">
                <h2 class="text-4xl mt-2 font-bold">${eDate}</h1>
              </div>
              <div class="absolute bottom-4 right-4">
                <img src="https://stonks.com/images/logo.png" class="h-20" />
              </div>
            </body>
          </html>
        `;
    },
  },
  strategy: 'query',
  contentType: 'image/png',
  cacheControl: 's-maxage=60, stale-while-revalidate',
  dev: {
    inspectHtml: false,
  },
});
