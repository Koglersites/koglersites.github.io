function Mob(x, y, dmg, sprite, speed, dir, collisionBox, cooldown, hp){
    Entity.call(this, x, y, dmg, sprite, speed, dir, collisionBox);

    this.maxhp = hp;
    this.currhp = hp;
    this.maxCooldown = cooldown;
    this.cooldown = cooldown;

    this.projectileList = new ProjectileList();

};