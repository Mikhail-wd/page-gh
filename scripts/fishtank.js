const canvas = document.getElementById("canvas")
canvas.width = window.innerWidth - 20
canvas.height = window.innerHeight - 20
const ctx = canvas.getContext("2d")

const tank = new Image()
const fishAmount = []
const coralsAmount = []
const coralsAmountBackground = []
const bubles = []
const positionX = (Math.random() * 10) / 2
tank.src = "./img/fishtank/tank.png"

class Fish {
          constructor() {
                    this.scale = {
                              width: 100,
                              height: 80
                    }
                    this.fish = new Image()
                    this.speedX = Math.ceil((Math.random() * 10) / 2 + 2)
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
          constructor(speed, positionX) {
                    this.size = Math.random() * 5
                    this.x = positionX
                    this.y = canvas.height - 180
                    this.speedX = speed * Math.random() + 2
                    this.round = [
                              4, 0, 2 * Math.PI
                    ]
          }
          move_up() {
                    this.y -= this.speedX
                    this.x += (Math.random() * 10 <= 5 ? -0.8 : +0.8)
                    this.changeSize(this.y)
          }
          changeSize(value) {
                    if (value < 800) {
                              this.round = [5, 0, 2 * Math.PI]
                    } if (value < 600) {
                              this.round = [8, 0, 2 * Math.PI]
                    } if (value < 400) {
                              this.round = [9, 0, 2 * Math.PI]
                    } if (value < 200) {
                              this.round = [11, 0, 2 * Math.PI]
                    }
          }
          draw() {
                    ctx.beginPath()
                    ctx.arc(this.x, this.y, ...this.round)
                    ctx.strokeStyle = "#ffffff8a"
                    ctx.stroke()
                    ctx.beginPath()
                    ctx.arc(this.x - 3, this.y - 3, this.round[0] - this.round[0] / 1.5, ...this.round.slice(1, 3))
                    ctx.fillStyle = "#ffffff8a"
                    ctx.fill()
                    this.move_up()

          }
}

class Coral {
          constructor() {
                    this.width = 350
                    this.heigth = 350
                    this.weed = new Image()
                    this.weed.src = `./img/fishtank/coral_${Math.ceil(Math.random() * 3)}.png`
                    this.x = Math.random() * canvas.width
                    this.y = canvas.height - 430
          }
          draw() {
                    ctx.drawImage(this.weed, this.x, this.y, this.width, this.heigth)
          }
}

for (let x = 0; x < 11; x++) {
          fishAmount.push(new Fish())
}
for (let x = 0; x < 3; x++) {
          coralsAmount.push(new Coral())
}
for (let x = 0; x < 6; x++) {
          coralsAmountBackground.push(new Coral())
}
for (let x = 0; x < 15; x++) {
          bubles.push(new Bubble((Math.random() * 10) / 2, positionX * (canvas.width / 2 + 300)))
}


function animate() {
          ctx.drawImage(tank, 0, 0, canvas.width, canvas.height)
          bubles.map(element =>
                    element.draw()
          )
          coralsAmountBackground.map(element =>
                    element.draw()
          )
          fishAmount.map((element, index) => {
                    element.draw()
          })
          coralsAmount.map(element =>
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
          let positionX = (Math.random())
          for (let x = 0; x < 15; x++) {
                    bubles.push(new Bubble((Math.random() * 10) / 2, (positionX * canvas.width)))
          }
          bubles.slice(0, 15)

}, 3000);