import gsap from 'gsap'

export default {
  data(){
    return {
      rectIsChecked: false,
      toggleValue: false
    }
  },
  methods: {
    toggleButtonState() {
        let ellipse = this.$refs.ellipse;
        this.rectIsChecked = !this.rectIsChecked;
        this.toggleValue = !this.toggleValue;

      if (!this.$refs.rect.classList.contains("checked")) {
         gsap.to(ellipse, 0.25, {
           attr: { cx: 60.911, rx: 1.108, ry: 8.17 },
         });
         this.$refs.rect.style.fill = "#5E81F4"
       } else {
         gsap.to(ellipse, 0.25, {
           attr: { cx: 28.911, rx: 9.028, ry: 9.028 },
         });
        this.$refs.rect.style.fill = "#DCDCE5"
      }
     }
 },
}
