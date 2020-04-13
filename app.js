var canvas = new Vue ({
    el: '#canvas',
    data: {
        canvasClasses: ["canvas", "font"],
        underlineClass: ["underlineFont"],
        radius: 20,
        coordinates: {
            x: 0,
            y: 0
        },
        origin: {
            x: 0,
            y: 0
        }
    },
    methods: {
        getCoordinates(){
            //sets x
            this.coordinates.x = event.offsetX;
            //sets y
            this.coordinates.y = event.offsetY;
        }
    },
    computed: {
        nearCenter() {
            const x = this.coordinates.x;
            const y = this.coordinates.y;
            //Gets x origin by diving width by 2
            const xOrigin = this.$el.clientWidth / 2;
            //Gets y origin by diving height by 2
            const yOrigin = this.$el.clientHeight / 2;
            //Check to see if both x and y are both inside 20px radius
            if ( x >= xOrigin - this.radius && x <= xOrigin + this.radius
              && y >= yOrigin - this.radius && y <= yOrigin + this.radius ) {
              return this.underlineClass; 
            }
        }
    }
})
