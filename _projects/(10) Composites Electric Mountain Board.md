---
name: Composite Electric Mountainboard
tools: [external project, Cad, Manufacturing, Carbon Fiber]
image: /assets/imgs/composite_board/miniature/miniature.png
description: Design and manufacturing of a carbon fiber mountainboard

---


<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-D6K1WDDD7F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D6K1WDDD7F');
</script>


<!-- Matomo -->
<script>
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://alessandroassirelli98.matomo.cloud/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='//cdn.matomo.cloud/alessandroassirelli98.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Matomo Code -->


![project_idea](/assets/imgs/composite_board/1.jpeg)
![project_idea](/assets/imgs/composite_board/2.jpeg)
![project_idea](/assets/imgs/composite_board/3.jpeg)
![project_idea](/assets/imgs/composite_board/4.jpeg)
![project_idea](/assets/imgs/composite_board/5.jpeg)
![project_idea](/assets/imgs/composite_board/6.jpeg)

# Overview
This project consisted in designing and building an Electric mountainboard made out of carbon fiber and kevlar. The trucks have to bee obtained by milling.  This is the follow up project of an electric skateboard that I had already built in the past, unfortunately I don't have a documentation of that, except for some pictures. I posted this project on the ESK8 Forum to get advices and suggestions (https://forum.esk8.news/t/mountainboard-carbon-fibre-diy/8534)

# Description
- Cad modeling of the board: the board need to have a concave shape in order to guarantee some springness, but not too far from the ground to still guarantee functionality. It needs to be tough, as with the two electric motors I was planning to use, considering the gear ratio it would be rated for 60 Km/h. Also the trucks has beed designed from zero, accounting for stifness and weight.

- Manufacturing: I realized the mold for the carbon fiber board by gluing several layers of MDF, then milled by a CNC router to obtained the desired shape. Some layers of epoxy resin to seal the mould, then I started the layup that consisted in: 
    - 1x plain carbon-kevlar 188 gsm 0°/90°
    - 1x twill carbon fiber 200 gsm +45°/-45°
    - 2 x ud carbon fiber 200 gsm 0°
    - 1x twill carbon fiber 200 gsm +45°/-45°
    - 1x ud carbon fiber 400 gsm 90°
    - 1x twill carbon fiber 200 gsm +45/-45° (#)
    - Core (3D core PET 5mm)
    - 1x twill carbon fiber 200 gsm +45/°-45° (/)
    - 1x ud carbon fiber 400 gsm 90°
    - 1x twill carbon fiber 200 gsm +45/°-45°
    - 2 x ud carbon fiber 200 gsm 0°
    - 2x plain carbon-kevlar 188 gsm 0°/90°
    
    Plus the reinforcement on the two bends (starting from the top, each side) the pieces to reinforce are about 250mm (to cover the bends):
    
    here starts the ‘#’ layer

    - 1 x ud carbon fiber 200 gsm 0°
    - 1x ud carbon fiber 400 gsm 90°
    - 1x twill carbon fiber 200 gsm +45°/-45°
    - Core (3D core PET 5mm)
    - 1x twill carbon fiber 200 gsm +45°/-45°
    - 1x ud carbon fiber 400 gsm 90°
    - 1 x ud carbon fiber 200 gsm 0°

    here starts the ‘/’ layer

Regarding the trucks here some pics of the Cad design (I know they are not original, but it’s a first test) I decided to use the Trampa’s hole position, so I can put them on the Trampa decks too.
The trucks are made of aluminium 7075 -Ergal-, while the axles is made of steel.
![project_idea](/assets/imgs/composite_board/7.jpeg)
![project_idea](/assets/imgs/composite_board/8.png)


# Results
Unfortunately I broke the board during a test. In the middle of the layup I put a core made of PET. The problem with that is that it was not meant to withstand large deformations. When I was testing the board I had a couple of test in which I jumped very hard on the deck. I belive the shear forces were too high and the core simply broke. Anyway it was very fun.

I get experience in 3D Cad design and manufacturing including milling and carbon fiber layup
