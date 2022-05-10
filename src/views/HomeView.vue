<script setup lang="ts">

</script>

<template>
	<main>
    	<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="http://sinpolrn.org.br/wp-content/uploads/2019/09/nature-1.jpg" class="d-block w-100 img-style" alt="...">
					<div class="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Some representative placeholder content for the first slide.</p>
					</div>
				</div>

				<div class="carousel-item">
					<img src="data:image/jpeg;base64,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" class="d-block w-100 img-style" alt="...">
					<div class="carousel-caption d-none d-md-block">
						<h5>Second slide label</h5>
						<p>Some representative placeholder content for the second slide.</p>
					</div>
				</div>

				<div class="carousel-item">
					<img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/joe-ciciarelli-qWVL0Io50PQ-unsplash.jpg?crop=0,784,6720,3696&wid=4000&hei=2200&scl=1.68" class="d-block w-100 img-style" alt="...">
					<div class="carousel-caption d-none d-md-block">
						<h5>Third slide label</h5>
						<p>Some representative placeholder content for the third slide.</p>
					</div>
				</div>
			</div>

			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>

		<div class="mx-auto">
			&nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit turpis ut purus facilisis facilisis. Maecenas eleifend aliquam leo sit amet laoreet. Proin elementum felis a justo fringilla vestibulum. Praesent tincidunt bibendum enim, vel interdum nulla vulputate at. Aenean elementum elementum laoreet. Nullam lacus mi, euismod id lectus vel, pretium vulputate augue. Suspendisse sed feugiat diam. Ut congue quam velit, vitae tincidunt magna malesuada ut. Sed hendrerit accumsan posuere. Donec accumsan ornare gravida. Curabitur facilisis lacus vitae risus vehicula interdum. Praesent interdum euismod tempor. Etiam diam neque, molestie quis feugiat id, vestibulum eget lacus. Nullam sed erat dignissim, lobortis nunc vel, viverra purus.
			<p/>
			&nbsp; &nbsp; Etiam sed libero id arcu tincidunt hendrerit. Aliquam tincidunt tellus non tortor laoreet, id efficitur urna iaculis. Phasellus a ultricies urna. Nunc odio odio, consectetur molestie neque ut, fringilla aliquet risus. Phasellus accumsan dignissim volutpat. Ut condimentum libero ut odio tempus, vitae finibus turpis lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed mattis dictum euismod. Morbi sodales dui velit, a tincidunt tellus auctor rutrum. Pellentesque convallis non urna non sollicitudin. Proin cursus id magna ac commodo. Fusce tempor viverra arcu vel congue. Nulla pellentesque ac neque eu tempor.
			<p/>
			&nbsp; &nbsp; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam facilisis arcu vel molestie ornare. Cras lectus dui, sollicitudin et metus et, laoreet sodales velit. Curabitur ultricies ipsum a sodales efficitur. Morbi dignissim ut elit quis sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur id blandit diam. Sed ultricies libero eu accumsan eleifend. Aenean sapien elit, vehicula vitae faucibus eget, lacinia sed orci. Etiam augue ipsum, dignissim eu viverra ac, tincidunt vel mi. Integer eget enim vitae leo tristique scelerisque a ac justo. Nam vestibulum, enim eu pellentesque suscipit, elit urna hendrerit tellus, fringilla sodales lectus odio sed est. Mauris pulvinar libero ac libero pellentesque facilisis. Etiam ligula nisl, blandit sit amet purus vitae, cursus congue est. Integer mollis in felis ac luctus. Aenean a ipsum id nulla iaculis pulvinar.
			<p/>
			&nbsp; &nbsp; Phasellus ac tristique justo. Nulla sed porta justo, ut eleifend mi. Integer nec convallis erat, quis efficitur sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis ante augue. Ut vulputate nibh ut imperdiet semper. Mauris eget quam imperdiet, laoreet est vitae, eleifend ligula. Pellentesque dolor magna, congue vel tempus eget, gravida at ex. Aliquam dapibus orci dolor, sit amet tempor metus elementum euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel ex lacus. Maecenas ultrices dignissim arcu sit amet tincidunt. Morbi sed nulla eu nisi blandit rhoncus nec sed justo. In lobortis finibus lacus nec consectetur.
			<p/>
			&nbsp; &nbsp; Maecenas lacus ligula, viverra a vehicula id, scelerisque sit amet tortor. Praesent nec eros sem. In volutpat, nulla vitae sodales suscipit, risus diam facilisis lorem, eget sodales libero nisi sed neque. Sed magna nulla, fermentum vel mauris vel, auctor bibendum erat. In varius velit quam, non efficitur sem hendrerit quis. Donec ex lorem, placerat at ipsum vitae, luctus feugiat turpis. Phasellus nec nibh vel sapien imperdiet viverra in eu sapien. Ut velit augue, accumsan imperdiet tempor nec, pulvinar ac odio. Pellentesque venenatis auctor sapien id imperdiet. Proin luctus arcu eu lorem auctor tincidunt. Aliquam auctor ultrices auctor. Nulla facilisi. Nam id commodo ipsum, mollis cursus metus. Donec id elit eu purus pulvinar viverra at ac turpis. Nam purus ipsum, suscipit eget nunc vel, mattis sagittis sapien. Integer eget condimentum nisl, in sollicitudin sapien.
		</div>
		<!-- <div class="mx-auto" style="width: 50%;">
			<div class="card mt-3" v-for="item in [1,2,3,4,5]" :key="item">
				
				<div class="card-header d-flex justify-content-between">
					<h5> TESTE 3</h5> 

					<h5 class="card-title">TESTE 2</h5>

					<b> Assuntos: Matemática  </b>

				</div>

				<div class="card-body">

					<div  class="form-check mt-2">
					SOCKETI
					</div>

				</div>

			</div>
    	</div> -->
  </main>
</template>

<style scoped>
	.img-style {
		width: 640px;
		height: 360px
	}
</style>
