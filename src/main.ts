interface Idol {
  id: number;
  name: string;
  isUncensored?: boolean;
}

let monoSakura: Required<Idol> = {
  id: 111,
  name: "Mono Sakura",
  isUncensored: true,
};

console.log(monoSakura);

const javIdol: Record<string, string> = {
  Id: "1",
  Name: "Mono Sakura",
};

const newJavIdol: Omit<Idol, "isUncensored" | "name"> = {
  id: 10000,
  // name: "Mono Sakura 2",
};
console.log(newJavIdol);

const newJavIdol2: Pick<Idol, "name"> = {
  name: "Mono Sakura idol 2",
};

console.log(newJavIdol2);

type IdolTransform = () => { isUncen: boolean; isCreampie: boolean };

const watchJav: ReturnType<IdolTransform> = {
  isUncen: true,
  isCreampie: true,
};

console.log("Watch jav category: ", watchJav);

type javTags = (
  jav: { tagId: number; tagName: string },
  jav2: { tagId: string; tagName: string }
) => void;

const getTag: Parameters<javTags>[1] = {
  tagId: "1",
  tagName: "Milf",
};

console.log(getTag);
