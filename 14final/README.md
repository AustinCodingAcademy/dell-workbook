# clicker game

## [play now](https://nntrn.github.io/dell-workbook/14final/)

based on orteil's [cookie cutter](http://orteil.dashnet.org/cookieclicker/) game


## references 
* [main.js - cookie clicker](http://orteil.dashnet.org/cookieclicker/main.js?v=2.041)
* [learning css grid](https://learncssgrid.com/)
* [Fishes](https://codepen.io/marqu3s10/pen/eEyJwv?editors=0110) by Alvaro Marqués
* [js-animation](https://javascript.info/js-animation)


## snippets

* [play now](#play-now)
* [references](#references)
* [snippets](#snippets)
  * [animating with FontAwesome](#animating-with-fontawesome)
  * [cookie clicker: base buff parameters](#cookie-clicker-base-buff-parameters)

<!-- /code_chunk_output -->

### animating with FontAwesome

```
<script defer src="https://use.fontawesome.com/releases/v5.6.1/js/all.js" integrity="sha384-R5JkiUweZpJjELPWqttAYmYM1P3SNEJRM6ecTQF05pFFtxmCO+Y1CiUhvuDzgSVZ" crossorigin="anonymous"></script>
```

```html
<div class="fa-3x" style="position:absolute; bottom:0;left:0;zoom:.8">
	<i class="fas fa-spinner fa-spin"></i>
	<i class="fas fa-circle-notch fa-spin"></i>
	<i class="fas fa-sync fa-spin"></i>
	<i class="fas fa-cog fa-spin"></i>
	<i class="fas fa-spinner fa-pulse"></i>
	<i class="fas fa-star-christmas fa-spin"></i>
</div>
```

animation class: `fa-spin` and `fa-pulse`


### cookie clicker: base buff parameters
```
/*
basic buff parameters :
	name:'Kitten rain',
	desc:'It\'s raining kittens!',
	icon:[0,0],
	time:30*Game.fps
other parameters :
	visible:false - will hide the buff from the buff list
	add:true - if this buff already exists, add the new duration to the old one
	max:true - if this buff already exists, set the new duration to the max of either
	onDie:function(){} - function will execute when the buff runs out
	power:3 - used by some buffs
	multCpS:3 - buff multiplies CpS by this amount
	multClick:3 - buff multiplies click power by this amount
*/
```

```js
new Game.buffType('building buff', function (time, pow, building) {
  var obj = Game.ObjectsById[building];
  return {
    name: Game.goldenCookieBuildingBuffs[obj.name][0],
    desc: 'Your ' + obj.amount + ' ' + obj.plural + ' are boosting your CpS!<br>Cookie production +' + (Math.ceil(pow * 100 - 100)) + '% for ' + Game.sayTime(time * Game.fps, -1) + '!',
    icon: [obj.iconColumn, 14],
    time: time * Game.fps,
    add: true,
    multCpS: pow,
    aura: 1
  };
});
```