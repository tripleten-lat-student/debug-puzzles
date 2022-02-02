const secrets = [
  "elephant",
  "giraffe",
  "inchworm",
  "walrus",
  "zebra",
]

let index = 0;
export const getSecret = () => secrets[index++]
