  <template>
    <b-carousel controls indicators :interval="300000" background="#ABABAB" height="100%">

	  <!-- Text slides -->
	  <b-carousel-slide height="300px" caption="First slide"  >
		<img src="http://placeskull.com/600/300/1C90F3/-1/0">
	 </b-carousel-slide>

	  <!-- Slides with custom text -->
	  <b-carousel-slide height="300px"  caption="First slide">
		<img src="http://placeskull.com/600/300/1C90F3/-1/0">
	  </b-carousel-slide>

	  <!-- Slides with image -->
	  <router-link to="/index"><b-carousel-slide height="300px"  caption="First slide" >
		<img src="http://placeskull.com/600/300/f44336/-1/0">
	  </b-carousel-slide></router-link>
	</b-carousel>

  </template>
import Index from
  <script>
  export default {
    name: 'index',
    data () {
      return {
      }
    }
  }
  </script>
