'use strict';

{
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const start = document.getElementById('start');
    const cancel = document.getElementById('cancel');

    start.addEventListener('click', function(){
        header.style.display = 'none';
        main.style.display = 'block';
    });

    cancel.addEventListener('click',function () {
        cancel.textContent = 'やめちゃうの？';
    });

    let enemy = document.getElementById('enemy');
    let hero = document.getElementById('hero');
    let veiw = document.getElementById('view');
    const attack = document.getElementById('attack');
    const escape = document.getElementById('escape');
    const comment = document.getElementById('comment');

    let enemyHP = 100;
    let heroHP = 60;
    let hit = 20;
    let damage = 10;

    enemy.textContent = enemyHP;
    hero.textContent = heroHP;
    //enemyHP <= 50になった時に、魔王の色を青くする
    //魔王が瀕死の状態に陥ったとtextを変更する

    attack.addEventListener('click', function () {

        if (enemyHP <= 0){
            comment.textContent = '魔王を倒しました';
                veiw.style.opacity = '0';
                setTimeout('location.reload()' ,1000);
                location.reload()} 
                else{ enemyHP = enemyHP -20;
                    enemy.textContent = enemyHP;
                    heroHP = heroHP -damage;
                    hero.textContent = heroHP;

                    if(enemyHP <= 0) {
                        comment.textContent = '魔王を倒しました';
                        veiw.style.opacity = '0';
                        setTimeout('location.reload()' ,1000);
                    }

                    else if(enemyHP <= 50) {
                        comment.textContent = '魔王が瀕死の状態に陥った';
                        veiw.style.backgroundColor  = 'blue';
                        setTimeout('location.reload()' ,1000);
                    }
            }
    });

    escape.addEventListener('click', function () {
        comment.textContent = '勇者は逃げ出した';
        setTimeout('location.reload()', 1000);
    });
    
}