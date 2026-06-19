type Credit = {
  file: string;
  description: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
};

const credits: Credit[] = [
  {
    file: "ananthagiri-hills.jpg",
    description: "View from Ananthagiri Hills, Vikarabad",
    author: "Wikimedia Commons contributor",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Ananthagiri_Hills.JPG",
  },
  {
    file: "ananthagiri-hill-point.jpg",
    description: "Ananthagiri Hill point",
    author: "Wikimedia Commons contributor",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Ananthagiri_Hill_point.jpg",
  },
  {
    file: "ananthagiri-trekking.jpg",
    description: "Ananthagiri trekking area, Vikarabad",
    author: "Wikimedia Commons contributor",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Ananthagiri_Hills_Trekking_Area.jpg",
  },
  {
    file: "banyan-tree-ananthagiri.jpg",
    description: "Banyan tree near Padmanabha temple, Vikarabad",
    author: "Wikimedia Commons contributor",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Banyan_tree_Ananthagiri.jpg",
  },
  {
    file: "ananthagiri-monsoon.jpg",
    description: "Ananthagiri Hills on a monsoon day",
    author: "Wikimedia Commons contributor",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Ananthagiri_Hills_Monsoon_days.jpg",
  },
  {
    file: "padmanabha-temple.jpg",
    description: "Anantha Padmanabha Swamy Temple, Vikarabad",
    author: "Wikimedia Commons contributor",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Anantha_Padmanabha_Swamy_Temple,_Vikarabad,_Anantahagiri_Hills,_Andhra_Pradesh_India.JPG",
  },
];

export default function Credits() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-24 sm:px-10">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-clay-500">
        Image credits
      </p>
      <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-forest-800 sm:text-5xl">
        Photographs and attribution
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-earth-700">
        The photographs used on this site are sourced from Wikimedia Commons
        and are reused here under their respective Creative Commons licences.
        Each image is credited to its photographer and linked to its original
        source. The banner photograph of the Vrindavan property is the
        project's own.
      </p>

      <ul className="mt-12 space-y-8 border-t border-earth-100 pt-8">
        {credits.map((c) => (
          <li key={c.file} className="border-b border-earth-100 pb-8">
            <p className="font-serif text-xl font-normal text-forest-800">
              {c.description}
            </p>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm text-earth-500">
              <dt className="font-medium text-earth-700">File</dt>
              <dd className="font-mono text-xs">{c.file}</dd>
              <dt className="font-medium text-earth-700">Author</dt>
              <dd>{c.author}</dd>
              <dt className="font-medium text-earth-700">License</dt>
              <dd>
                <a
                  href={c.licenseUrl}
                  className="text-clay-600 hover:text-clay-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.license}
                </a>
              </dd>
              <dt className="font-medium text-earth-700">Source</dt>
              <dd className="break-words">
                <a
                  href={c.source}
                  className="text-clay-600 hover:text-clay-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wikimedia Commons
                </a>
              </dd>
            </dl>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm leading-relaxed text-earth-500">
        If you are the photographer of any of these images and would like a
        more specific credit (or removal), please open an issue on the project
        repository.
      </p>
    </div>
  );
}
