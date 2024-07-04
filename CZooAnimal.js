class CZooAnimal {
    constructor(name, cageNumber, IdTypeAnimal, weight) {
      this.IdAnimal = Math.floor(Math.random() * 100); 
      this.name=name;
      this.cageNumber=cageNumber;
      this.IdTypeAnimal=IdTypeAnimal;
      this.weight=weight;
    }}
  
  const zoo = [
    new CZooAnimal('Leon', 1, 'LEON', 190),
    new CZooAnimal('Panda', 2, 'PANDA', 160),
    new CZooAnimal('Hipoptamo', 3, 'HIPOPOTAMO', 1500),
    new CZooAnimal('Tigre', 4, 'TIGRE', 310),
    new CZooAnimal('Gallina', 4, 'GALLINA', 2),
    new CZooAnimal('Carpincho', 5, 'CARPINCHO', 66),
  ];

  const countAnimalsInCage5Under3kg=animals => animals.filter(animal => animal.cageNumber === 5 && animal.weight < 300).length;
  const countFelineAnimalsBetweenCages2And5=animals => animals.filter(animal=>['TIGRE', 'LEON'].includes(animal.IdTypeAnimal) && animal.cageNumber >= 2 && animal.cageNumber <= 5).length;
  const listAnimalNameInCage4Under120=animals => {const animal=animals.find(animal => animal.cageNumber === 4 && animal.weight < 120);};
  
  console.log('Animales jaula 5 con un peso menor a 300 kg: ',countAnimalsInCage5Under3kg(zoo));
  console.log('Animales felinos entre jaulas 2 y 5: ',countFelineAnimalsBetweenCages2And5(zoo));
  console.log('Nombre de un animal en jaula 4 con un peso menor a 120 kg: ',listAnimalNameInCage4Under120(zoo));
  