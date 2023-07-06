<script lang="ts">
	import { onMount } from 'svelte';

	type MagnifierFields = {
		targetImg: HTMLImageElement;
		scale?: number;
		magnifierSize?: number;
	};

	class Magnifier {
		targetImg: HTMLImageElement;
		scale?: number;
		magnifierSize?: number;
		magnifier: HTMLDivElement | null;
		showMagnifier: boolean;

		constructor({ targetImg, scale, magnifierSize }: MagnifierFields) {
			if (targetImg instanceof HTMLImageElement) {
				this.targetImg = targetImg;
			} else {
				throw new Error('targetImg is not an HTMLImageElement');
			}

			this.scale = scale && scale > 1 ? scale : 3;
			this.magnifierSize = magnifierSize ? magnifierSize : 300;
			this.magnifier = null;
			this.showMagnifier = false;

			this.init();
		}

		init = () => {
			this.createMagnifier();
			this.handleEvents();
		};

		createMagnifier = () => {
			const magnifier = document.createElement('div');
			magnifier.style.cssText = `
        position: fixed;
        width: ${this.magnifierSize}px;
        height: ${this.magnifierSize}px;
        overflow: hidden;
        border-radius: 50%;
        box-shadow: inset 0 0 20px #fff;
        background: url(${this.targetImg.src}) no-repeat #ccc;
        background-size: ${this.targetImg.clientWidth * (this.scale ? this.scale : 3)}px auto;
      `;
			document.body.append(magnifier);
			this.magnifier = magnifier;
		};

		handleEvents = () => {
			document.addEventListener('click', (e) => {
				const { clientX, clientY } = e;
				if (e.target === this.targetImg) {
					this.showMagnifier = !this.showMagnifier;
				} else {
					this.showMagnifier = false;
				}
				this.toggleMagnifier();
				if (this.showMagnifier) this.updateMagnifier(clientX, clientY);
			});

			document.addEventListener('mousemove', (e) => {
				if (!this.showMagnifier) return;
				const { clientX, clientY } = e;
				if (this.isInTarget(clientX, clientY)) {
					this.updateMagnifier(clientX, clientY);
				} else {
					this.showMagnifier = false;
					this.toggleMagnifier();
				}
			});

			// reset magnifier's background-size after window resize
			window.addEventListener('resize', (e) => {
				if (this.magnifier)
					this.magnifier.style.backgroundSize = `${
						this.targetImg.clientWidth * (this.scale ? this.scale : 3)
					}px auto`;
			});
		};

		toggleMagnifier = () => {
			if (this.magnifier) this.magnifier.style.display = this.showMagnifier ? 'block' : 'none';
			// set pointer to crosshair to better target zoom area
			this.targetImg.style.cursor = this.showMagnifier ? 'crosshair' : 'unset';
		};

		updateMagnifier = (x: number, y: number) => {
			if (!(this.magnifier && this.magnifierSize && this.scale)) return;
			if (x + this.magnifierSize > window.innerWidth) {
				this.magnifier.style.left = window.innerWidth - this.magnifierSize + 'px';
			} else {
				this.magnifier.style.left = x + 'px';
			}
			if (y + this.magnifierSize > window.innerHeight) {
				this.magnifier.style.top = window.innerHeight - this.magnifierSize + 'px';
			} else {
				this.magnifier.style.top = y + 'px';
			}
			const targetImgRect = this.targetImg.getBoundingClientRect();
			const bgX = -(x - targetImgRect.x) * this.scale + this.magnifierSize / 2 + 'px';
			const bgY = -(y - targetImgRect.y) * this.scale + this.magnifierSize / 2 + 'px';
			this.magnifier.style.backgroundPosition = `${bgX} ${bgY}`;
		};

		isInTarget = (x: number, y: number) => {
			const targetImgRect = this.targetImg.getBoundingClientRect();
			const { left, top, width, height } = targetImgRect;
			if (x < left || y < top || x > left + width || y > top + height) {
				return false;
			}
			return true;
		};
	}

	let elementImage: HTMLImageElement;

	onMount(() => {
		const magnifier = new Magnifier({
			targetImg: elementImage,
			scale: 5,
			magnifierSize: 400
		});
	});
</script>

<img alt="art girl" bind:this={elementImage} src="/art-girl.jpg" width="1920" height="1440" />
