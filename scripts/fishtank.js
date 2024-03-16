const canvas = document.getElementById("canvas")
canvas.width = window.innerWidth - 20
canvas.height = window.innerHeight - 20
const ctx = canvas.getContext("2d")

const tank = new Image()
const fishAmount = []
const weedAmount = []
const bubles = []
tank.src = "./img/fishtank/tank.png"


class Fish {
          constructor() {
                    this.scale = {
                              width: 100,
                              height: 80
                    }
                    this.fish = new Image()
                    this.speedX = (Math.random() * 10) / 2
                    this.direction = Math.ceil(Math.random() * 11)
                    this.x = this.direction <= 5 ? canvas.width + (Math.random() * 11) + 100 : (Math.random() * 11) - 100
                    this.y = Math.random() * canvas.height - 200 <= 0 ? 100 : Math.random() * canvas.height - 200
                    this.fish.src = this.direction <= 5 ? `./img/fishtank/fish_${Math.ceil(Math.random() * 6)}_left.png` : `./img/fishtank/fish_${Math.ceil(Math.random() * 6)}_right.png`
          }
          move_left() {
                    this.x -= this.speedX
          }
          move_right() {
                    this.x += this.speedX
          }
          draw() {
                    ctx.drawImage(this.fish, this.x, this.y, this.scale.width, this.scale.height)
                    if (this.direction <= 5) {
                              this.move_left();
                    } else {
                              this.move_right();
                    }
          }
}

class Bubble {
          constructor(x) {
                    this.size = Math.random() * 5
                    this.x = Math.random() * canvas.width+x
                    this.y = canvas.height - 200
                    this.speedX = 3*Math.random()
                    this.round = [
                              1, 0, 2 * Math.PI
                    ]
          }
          move_up() {
                    this.y -= this.speedX
                    this.x += (Math.random()*10<=5 ? -0.8 : +0.8)
                    this.changeSize(this.y)
          }
          changeSize(value) {
                    if (value < 800) {
                              this.round = [2, 0, 2 * Math.PI]
                    } if (value < 600) {
                              this.round = [8, 0, 2 * Math.PI]
                    } if (value < 400) {
                              this.round = [12, 0, 2 * Math.PI]
                    } if (value < 200) {
                              this.round = [24, 0, 2 * Math.PI]
                    }
          }
          draw() {
                    ctx.beginPath()
                    ctx.arc(this.x, this.y, ...this.round)
                    ctx.fillStyle = "#77a3e8d4"
                    ctx.fill()
                    this.move_up()

          }
}

class Weed {
          constructor() {
                    this.width = 100 * Math.random() + 120
                    this.weed = new Image()
                    this.weed.src = `./img/fishtank/weed_1.png`
                    this.x = Math.random() * canvas.width
                    this.y = canvas.height - 520
          }
          draw() {
                    ctx.drawImage(this.weed, this.x, this.y, this.width, 380)
          }
}

for (let x = 0; x < 11; x++) {
          fishAmount.push(new Fish())
}
for (let x = 0; x < 5; x++) {
          weedAmount.push(new Weed())
}
for (let x = 0; x < 15; x++) {
          bubles.push(new Bubble(Math.random()*10))
}

function animate() {
          ctx.drawImage(tank, 0, 0, canvas.width, canvas.height)
          weedAmount.map(element =>
                    element.draw()
          )
          bubles.map(element => {
                    element.draw()
          }
          )
          fishAmount.map((element, index) => {
                    element.draw()
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

setInterval(() => {
          for (let x = 0; x < 15; x++) {
                    bubles.push(new Bubble(Math.random()*10))
          }
          fishAmount.slice(0, 15)
          
}, 21000);