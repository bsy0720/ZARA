$(function(){

  gsap.registerPlugin(ScrollTrigger);


  /**
   * @헤더애니메이션
   */
  $(window).scroll(function(){
    curr=$(this).scrollTop();
    if(curr > 0){
      $('header').addClass('on')
    }else{
      $('header').removeClass('on')
    }
  })

  gsap.utils.toArray('[data-theme=white]').forEach(element => {
     ScrollTrigger.create({
      trigger:element,
      start:"0% 0%",
      end:"100% 0%",
      toggleClass:{targets:".header",className:"black"}
    })  
  });
 


  $('.header a').hover(function(){
    $('.wrapper').addClass('scale');
  },function(){
    $('.wrapper').removeClass('scale');
  })

  gsap.utils.toArray('.motion-txt').forEach(element => {
    let xpVal = element.dataset.xp;
    horimotion = gsap.timeline({
      scrollTrigger: {
        trigger: '.sc-main',
        start: "0% 0%",
        scrub:1,
      },
    })
    horimotion
    .addLabel('c')
    .to(element, { xPercent:xpVal},'c')
  });



  gsap.utils.toArray('.hori-text').forEach(element => {
    var xVal = element.dataset.x;
    var childEl = element.children[1].children[0];
    horimotion = gsap.timeline({
      scrollTrigger: {
        trigger: '.sc-text',
        start: "0% 50%",
        scrub:1,
      },
    })
    horimotion
    .addLabel('a')
    .to(element, { xPercent:xVal },'a')
    .to(childEl, { scale:1.8, },'a')
  });


/**
 * @비디오부분_원
 */

$('.sc-video .mouse-pos').mousemove(function(e){
  x = (e.offsetX - (window.innerWidth/2))/10;
  y = (e.offsetY - (window.innerHeight/2))/10;
  gsap.to('.sc-video .group-video',{
    x:x,
    y:y
  })
})

$('body').mousemove(function(e){
  x = e.clientX;
  y = e.clientY;
  gsap.to('.cursor',0.2,{
    x:x,
    y:y,
    stagger:0.1
  })
})

  gsap.to('.c-scrollbar .curr',{
    scrollTrigger: {
      trigger: '.wrapper',
      start: "0% 0%",
      end:"100% 100%",
      scrub:1,
    },
    ease:'none',
    height:'100%'
  })


  scaleMotion = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-halo .inner3',
      start: "0% 0%",
      end:"+=300%",
      scrub:1,
      pin:true,
    },
  })
  scaleMotion
  .addLabel('a')
  
  .to('.sc-halo .group-left',2,{xPercent:100},'a')
  .to('.sc-halo .group-right',2,{xPercent:-100},'a')
  .to('.sc-halo .inner3 .dimmed',2,{opacity:0.5},'a')

  .to('.sc-halo .group-mid .texture',1,{ opacity:0, },'a')
  .to('.sc-halo .group-mid .deco-text',1,{ opacity:0, },'a')
  .to('.sc-halo .group-mid .img-box',5,{ width:'100vw', height:'200vh' },'a')
  .to('.scale-wrapper',5,{ height:'200vh' },'a')

  .addLabel('b')
  .to('.group-savior',5,{ yPercent:-100, },'b-=4')
  .from('.group-savior .heading-block .txt',5,{ yPercent:100, },'b-=2')


  gsap.to('.sc-studio .studio-img img',{
    scrollTrigger: {
      trigger:'.sc-studio .studio-img',
      start: "0% 100%",
      end:"100% 0%",
      scrub:0.3,
    },
    ease:'none',
    yPercent:-10,
  })

 gsap.to('.sc-collective .bg-box .bg', {
  scrollTrigger: {
    trigger:'.sc-collective .bg-box',
    start: "0% 100%",
    end:"90% 0%",
    scrub:0.5,
  },
  ease:'none',
  yPercent:-15,
 })

  gsap.from('.footer .inner',{
    scrollTrigger: {
      trigger:'.footer',
      start: "0% 100%",
      end:"0% 50%",
      scrub:0,
    },
    opacity:0,
    ease:'none',
    yPercent:-20,
  })






}) //지우지말기



