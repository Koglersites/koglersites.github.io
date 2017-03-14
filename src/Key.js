var Key = {
    pressed: {},

    ENTER: 13,
    WALKLEFT: 65,
    WALKDOWN: 83,
    WALKRIGHT: 68,
    WALKUP: 87,
    SHOOTLEFT: 37,
    SHOOTDOWN: 40,
    SHOOTRIGHT: 39,
    SHOOTUP: 38,



    isDown: function(keyCode) {
        return this.pressed[keyCode];
    },

    onKeydown: function(event) {
        this.pressed[event.keyCode] = true;
        if(event.keyCode >= 37 && event.keyCode <= 40) event.preventDefault();
    },

    onKeyup: function(event) {
        this.pressed[event.keyCode] = false;
    }
};

window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);


