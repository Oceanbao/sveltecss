<div>
	<input id="moon-sun-checkbox" type="checkbox" />
	<label for="moon-sun-checkbox">
		<div class="sun" />
		<div class="stars">
			<div class="star" />
		</div>
		<div class="cloud-box">
			<div class="cloud" />
		</div>
	</label>
</div>

<style>
	input {
		display: none;
		opacity: 0;
		visibility: hidden;
	}

	label {
		padding: 5px;
		position: relative;
		display: flex;
		align-items: center;
		background-color: #00d0f3;
		border-radius: 50px;
		width: 200px;
		height: 100px;
		border: 4px solid #99ecfa;
		cursor: pointer;
		overflow: hidden;
		transition: background-color 0.1s;
		border-color: 0.1s linear;
	}

	input:checked ~ label {
		background-color: #1a2762;
		border-color: #5668b5;
	}

	.sun {
		position: relative;
		width: 70px;
		height: 70px;
		background-color: #ffe441;
		border-radius: 70px;
		transition: transform 0.3s linear;
	}

	.sun::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 70px;
		background-color: #1a2762;
		opacity: 0;
		transform: translate(20px, -10px);
		transition: opacity 0.2s linear;
	}

	input:checked ~ label .sun::before {
		opacity: 1;
	}
	input:checked ~ label .sun {
		transform: translateX(102px);
	}

	.cloud-box {
		position: absolute;
		right: 75px;
		top: 46px;
	}

	.cloud {
		width: 95px;
		height: 40px;
		background-color: #fff;
		border-radius: 50px;
		transition: transform 0.3s linear, opacity 0.3s linear;
	}

	.cloud::before,
	.cloud::after {
		content: '';
		position: absolute;
		background-color: #fff;
		display: block;
		border-radius: 100px;
	}
	.cloud::after {
		width: 35px;
		height: 35px;
		top: -13px;
		right: 15px;
	}
	.cloud::before {
		width: 45px;
		height: 45px;
		top: -22px;
		right: 39px;
	}
	input:checked ~ label .cloud {
		transform: translateX(30px);
		opacity: 0;
	}

	.stars {
		transform: translateX(-15px);
		opacity: 0;
		transition: opacity 0.3s 0s linear;
	}
	input:checked ~ label .stars {
		opacity: 1;
		transition-delay: 0.2s;
	}
	.star {
		width: 6px;
		height: 6px;
		border-radius: 50px;
		background-color: #fff;
		box-shadow: -22px 18px 0px 1.2px #fff, -15px -23px 0px 2px #fff, 14px -15px 0px 0px #fff,
			14px 15px 0px 0px #fff;
	}
</style>
