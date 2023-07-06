<div class="card">
	<div class="side front">
		<div class="pic pic1">&nbsp;</div>
		<h4 class="heading"><span class="text1">Sea Explorer</span></h4>
		<div class="details">
			<ul>
				<li>3 day tours</li>
				<li>Up to 30 ppl</li>
				<li>2 tour guides</li>
				<li>Sleep in cozy hotels</li>
			</ul>
		</div>
	</div>
	<div class="side back back1">
		<figure class="shape">
			<img src="" alt="" />
			<figcaption class="caption">Caption Text</figcaption>
		</figure>
		<div class="cta">
			<div class="price-box" />
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		height: 23rem;
		width: 16rem;
		margin-top: 5rem;
		perspective: 150rem;
		position: relative;

		&:hover .front {
			transform: rotateY(-180deg);
		}
		&:hover .back {
			transform: rotateY(0);
		}
	}

	.side {
		height: 52rem;
		transition: all 0.8s ease;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		/* -webkit-backface-visibility: hidden; */
		backface-visibility: hidden;
		border-radius: 3px;
		overflow: hidden;
		box-shadow: 0 1.5rem 4rem rgba(0, 0, 255, 0.15);
	}

	.front {
		background-color: white;
	}
	.back {
		transform: rotateY(180deg);
		padding: 2rem;
	}

	.back1 {
		background-image: linear-gradient(to right bottom, lightblue, lime);
	}

	.pic {
		background-size: cover;
		height: 23rem;
		background-blend-mode: screen;
		clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
	}
	.pic1 {
		background-image: linear-gradient(to right bottom, lightblue, darkgreen), url();
	}

	.heading {
		font-size: 2.8rem;
		font-weight: 300;
		text-transform: uppercase;
		text-align: right;
		color: white;
		position: absolute;
		top: 12rem;
		right: 2rem;
		width: 75%;

		span {
			padding: 1rem 1.5rem;
			box-decoration-break: clone;
			-webkit-box-decoration-break: clone;
		}
	}

	.details {
		padding: 3rem;

		ul {
			list-style: none;
			width: 80%;
			margin: 0 auto;

			li {
				text-align: center;
				/* font-size: 1.5rem; */
				padding: 1rem;

				&:not(:last-child) {
					border-bottom: 1px solid lightgray;
				}
			}
		}
	}

	.cta {
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 90%;
		text-align: center;
	}

	.price-box {
		text-align: center;
		color: white;
		margin-bottom: 8rem;
	}
</style>
