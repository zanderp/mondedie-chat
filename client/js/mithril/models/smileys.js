'use strict';
var smileys = smileys || {};

/**
 * Smileys component - model
 */
(function () {
  smileys.list = {
    get:function() {
      return [
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f600.png?v=1.2.4', pattern:':grinning:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f602.png?v=1.2.4', pattern:':joy:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f603.png?v=1.2.4', pattern:':smiley:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f607.png?v=1.2.4', pattern:':innocent:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f609.png?v=1.2.4', pattern:':wink:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f642.png?v=1.2.4', pattern:':slight_smile:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f60b.png?v=1.2.4', pattern:':yum:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f60d.png?v=1.2.4', pattern:':heart_eyes:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f618.png?v=1.2.4', pattern:':kissing_heart:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f61b.png?v=1.2.4', pattern:':stuck_out_tongue:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f60e.png?v=1.2.4', pattern:':sunglasses:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f610.png?v=1.2.4', pattern:':neutral_face:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f644.png?v=1.2.4', pattern:':rolling_eyes:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f914.png?v=1.2.4', pattern:':thinking:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f61f.png?v=1.2.4', pattern:':worried:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f621.png?v=1.2.4', pattern:':rage:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f615.png?v=1.2.4', pattern:':confused:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/2639.png?v=1.2.4', pattern:':frowning2:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f62e.png?v=1.2.4', pattern:':open_mouth:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f622.png?v=1.2.4', pattern:':cry:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f62d.png?v=1.2.4', pattern:':sob:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f608.png?v=1.2.4', pattern:':smiling_imp:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f62b.png?v=1.2.4', pattern:':tired_face:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f613.png?v=1.2.4', pattern:':sweat:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f604.png?v=1.2.4', pattern:':smile:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f60c.png?v=1.2.4', pattern:':relieved:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f61c.png?v=1.2.4', pattern:':stuck_out_tongue_winking_eye:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f620.png?v=1.2.4', pattern:':angry:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f614.png?v=1.2.4', pattern:':pensive:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f631.png?v=1.2.4', pattern:':scream:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f628.png?v=1.2.4', pattern:':fearful:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f635.png?v=1.2.4', pattern:':dizzy_face:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f47f.png?v=1.2.4', pattern:':imp:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f596.png?v=1.2.4', pattern:':vulcan:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f595.png?v=1.2.4', pattern:':middle_finger:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f630.png?v=1.2.4', pattern:':cold_sweat:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f634.png?v=1.2.4', pattern:':sleeping:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f44f.png?v=1.2.4', pattern:':clap:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f4a9.png?v=1.2.4', pattern:':poop:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f4a1.png?v=1.2.4', pattern:':bulb:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f354.png?v=1.2.4', pattern:':hamburger:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/2600.png?v=1.2.4', pattern:':sunny:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f327.png?v=1.2.4', pattern:':cloud_rain:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/26bd.png?v=1.2.4', pattern:':soccer:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f6f0.png?v=1.2.4', pattern:':satellite_orbital:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f680.png?v=1.2.4', pattern:':rocket:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f4ee.png?v=1.2.4', pattern:':postbox:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f4b6.png?v=1.2.4', pattern:':euro:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f4b0.png?v=1.2.4', pattern:':moneybag:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f4b3.png?v=1.2.4', pattern:':credit_card:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/26d4.png?v=1.2.4', pattern:':no_entry:' },
        { url:'//cdn.jsdelivr.net/emojione/assets/png/1f1eb-1f1f7.png?v=1.2.4', pattern:':flag_fr:' },
        { url:'/images/smileys/hap.gif', pattern:':hap:' },
        { url:'/images/smileys/monkey-glass.png', pattern:':monkeyglass:' },
        { url:'/images/smileys/monkey-smile.png', pattern:':monkeysmile:' },
        { url:'/images/smileys/noel.gif', pattern:':noel:' },
        { url:'/images/smileys/kappa.png', pattern:':kappa:' },
        { url:'/images/smileys/bb8.png', pattern:':bb8:' },
        { url:'/images/smileys/saber.png', pattern:':saber:' },
        { url:'/images/smileys/kyloren.png', pattern:':kyloren:' },
        { url:'/images/smileys/troll.png', pattern:':troll:'}
      ]
    }
  };
})();
