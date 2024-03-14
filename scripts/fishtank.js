const canvas = document.getElementById("canvas")
canvas.width = window.innerWidth - 20
canvas.height = window.innerHeight - 20
const ctx = canvas.getContext("2d")

const tank = new Image()
const fishAmount = []
const weedAmount = []
tank.src = "./img/fishtank/tank.png"


class Fish {
          constructor() {
                    this.fish = new Image()
                    this.fish.src = `./img/fishtank/fish_${Math.ceil(Math.random() * 6)}.png`
                    this.speedX = (Math.random() * 10) / 2
                    this.direction = Math.ceil(Math.random() * 11)
                    this.x = this.direction <= 5 ? canvas.width + (Math.random() * 11) + 100 : (Math.random() * 11) - 100
                    this.y = Math.random() * canvas.height - 200 <= 0 ? 100 : Math.random() * canvas.height - 200
          }
          move_left() {
                    this.x -= this.speedX
          }
          move_right() {
                    this.x += this.speedX
          }
          draw() {
                    ctx.drawImage(this.fish, this.x, this.y, 100, 80)
                    if (this.direction <= 5) {
                              this.move_left();
                    } else {
                              this.move_right();
                    }
          }
}

class Weed {
          constructor() {
                    this.width = 100*Math.random()+120
                    this.weed = new Image()
                    this.weed.src = `./img/fishtank/weed_1.png`
                    this.x = Math.random() * canvas.width
                    this.y = canvas.height - 520
          }
          draw() {
                    ctx.drawImage(this.weed, this.x, this.y, this.width , 380)
          }
}

for (let x = 0; x < 11; x++) {
          fishAmount.push(new Fish())
}
for (let x = 0; x < 5; x++) {
          weedAmount.push(new Weed())
}

function animate() {
          ctx.drawImage(tank, 0, 0, canvas.width, canvas.height)
          fishAmount.map((element, index) => {
                    element.draw()
                    if (element.x > canvas.width + 100 || element.x < 0 - 100) {
                    }
          })
          weedAmount.map(element =>
                    element.draw()
          )
}


setInterval(() => {
          animate()
}, 40)

setInterval(() => {
          for (let x = 0; x < 11; x++) {
                    fishAmount.push(new Fish())
          }
          fishAmount.slice(0, 11)
}, 10000);