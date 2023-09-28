class TailFactory {
  constructor(tailLength) {
    this.tailLength = tailLength;
  }
}

class TorsoFactory {
  constructor(color) {
    this.color = color;
  }
}

class HeadFactory {
  constructor(snoutLength) {
    this.snoutLength = snoutLength;
  }
}

class ReptilePartFactory {
  static createPart(type, props) {
    if (type === "tail"){
        return new TailFactory(props);
    } else if(type === "torso"){
        return new TorsoFactory(props);
    } else if(type === "head"){
        return new HeadFactory(props);
    } else {
        throw new Error("Invalid type");
    }
  }
}

const alligatorProps = { tailLength: 2.5, color: "green", snoutLength: 1 };
const alligator = {
  tail: ReptilePartFactory.createPart("tail", alligatorProps),
  torso: ReptilePartFactory.createPart("torso", alligatorProps),
  head: ReptilePartFactory.createPart("head", alligatorProps),
};

console.log(alligator);
