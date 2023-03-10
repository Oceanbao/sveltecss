<div class="form">
	<form action="" class="content">
		<div class="box">
			<input type="text" class="input" placeholder="Enter Name" />
			<label for="" class="label">ENTER NAME</label>
			<div class="shadow" />
		</div>
		<div class="box">
			<input type="email" class="input" placeholder="Enter Email" />
			<label for="" class="label">ENTER EMAIL</label>
			<div class="shadow" />
		</div>

		<div class="button">
			<input type="submit" class="submit" value="Sign Up" />
		</div>
	</form>
</div>

<style>
	.form {
		--first-color: hsl(79, 100%, 49%);
		--white-color: #fff;
		--black-color: #000;
		--normal-font-size: 0.938rem;
		--tiny-font-size: 0.563rem;

		font-size: var(--normal-font-size);
		background-color: var(--white-color);

		height: 100vh;
		display: grid;
		place-items: center;
		margin: 0 1.5rem;
	}

	.content {
		display: grid;
		row-gap: 1.5rem;
	}

	.input,
	.label,
	.submit {
		border: 0;
		outline: none;
		font-size: var(--normal-font-size);
	}

	.box {
		width: 312px;
		height: 59px;
		position: relative;
	}

	.shadow {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: var(--black-color);
	}

	.input {
		position: absolute;
		border: 2px solid var(--black-color);
		background-color: var(--white-color);
		width: 100%;
		height: 100%;
		z-index: 10;
		padding: 18px;
		transition: transform 0.3s;
	}

	.input::placeholder {
		transition: opacity 0.5s;
	}

	.label {
		z-index: 100;
		position: absolute;
		top: 16px;
		left: 20px;
		font-size: var(--tiny-font-size);
		font-weight: 600;
		transition: 0.2s;
		pointer-events: none;
		opacity: 0;
	}

	.button {
		justify-self: flex-end;
		background-color: var(--black-color);
	}

	.submit {
		padding: 0.875rem 1.5rem;
		color: var(--black-color);
		background-color: var(--first-color);
		cursor: pointer;
		transition: transform 0.3s;
	}

	.submit:hover {
		transform: translate(-6px, -6px);
	}

	.input:focus::placeholder {
		opacity: 0;
		transition: 0.3s;
	}

	.input:focus,
	.input:not(:placeholder-shown).input:not(:focus) {
		transform: translate(-8px, -8px);
		padding: 28px 18px 18px;
		animation: input-animation 0.5s;
	}

	.input:focus + .label,
	.input:not(:placeholder-shown).input:not(:focus) + .label {
		opacity: 1;
		top: 2px;
		left: 12px;
		transition: 0.3s;
	}

	@keyframes input-animation {
		0% {
			transform: translate(0);
		}
		40% {
			transform: translate(-9px, -9px);
		}
		60% {
			transform: translate(-7px, -7px);
		}
	}

	@media screen and (max-width: 340px) {
		.content,
		.box {
			width: 100%;
		}
	}

	@media screen and (max-width: 968px) {
		.content {
			transform: scale(1.1);
		}
	}
</style>
