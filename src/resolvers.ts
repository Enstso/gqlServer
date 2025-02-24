const doctorsData = [
  { name: 'Samia Mekame', speciality: 'OPHTALMOLOGIST' },
  { name: 'Catherine Bedoy', speciality: 'PSYCHOLOGIST' },
];

export const resolvers = {
  Query: {
    doctors: (parent, args, context, info) => {
      const { specialies } = args; 
      
      if (specialies && specialies.length > 0) {
        return doctorsData.filter(doctor => 
          specialies.includes(doctor.speciality)
        );
      }
        console.log(doctorsData);
      return doctorsData; 
    },
     // Addition
     add: (parent, { number1, number2 }) => {
      return number1 + number2;
    },

    // Soustraction
    subtract: (parent, { number1, number2 }) => {
      return number1 - number2;
    },

    // Multiplication
    multiply: (parent, { number1, number2 }) => {
      return number1 * number2;
    },

    // Division
    divide: (parent, { number1, number2 }) => {
      if (number2 === 0) {
        throw new Error("Cannot divide by zero");
      }
      return number1 / number2;
    },

    closestColor: (parent, { hex }) => {
      const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFFF33"]; 

      const hexToRgb = (hex) => {
        const r = parseInt(hex.substr(1, 2), 16);
        const g = parseInt(hex.substr(3, 2), 16);
        const b = parseInt(hex.substr(5, 2), 16);
        return { r, g, b };
      };

      const colorDistance = (color1, color2) => {
        const rgb1 = hexToRgb(color1);
        const rgb2 = hexToRgb(color2);
        return Math.sqrt(
          Math.pow(rgb1.r - rgb2.r, 2) +
          Math.pow(rgb1.g - rgb2.g, 2) +
          Math.pow(rgb1.b - rgb2.b, 2)
        );
      };

      let closest = colors[0];
      let minDistance = colorDistance(hex, closest);

      for (let i = 1; i < colors.length; i++) {
        const dist = colorDistance(hex, colors[i]);
        if (dist < minDistance) {
          closest = colors[i];
          minDistance = dist;
        }
      }

      return closest;
    }
  },
};
