<button>
	<span>Cyber Button</span>
	<span class="glitch">Cyber Button</span>
	<i class="tag">R18</i>
</button>

<style>
	button {
		--clip-base: polygon(
			0 0,
			100% 0,
			100% 100%,
			95% 100%,
			95% 90%,
			85% 90%,
			85% 100%,
			8% 100%,
			0 70%
		);

		width: 60vmin;
		height: 15vmin;
		background: transparent;
		color: #fff;
		font-size: 5vmin;
		font-weight: 700;
		line-height: 15vmin;
		letter-spacing: 0.2vmin;
		border: none;
		cursor: pointer;
		user-select: none;

		position: relative;
	}

	button::before,
	button::after {
		content: '';

		/* 上下两层除了颜色和位移不一致，其他都一样 */
		inset: 0;
		/* 使用基础默认的裁剪区域 */
		clip-path: var(--clip-base);

		/* 定位叠起来 */
		position: absolute;
		/* 显示层级要比父元素本身低，不然文字就出不来 */
		z-index: -1;
	}
	button::before {
		/* 最底下的青色背景 */
		background-color: #02ffd3;
		/* 向右移动一点，错开，感觉像有边框一样 */
		transform: translateX(0.6vmin);
	}
	button::after {
		/* 盖住青色的红色背景 */
		background-color: #ff013c;
	}

	.tag {
		/* 右下角小标签的字体颜色、大小 */
		color: #000;
		/* 由于浏览器有最小字体大小的限制，所以设置一个偏大的文字 */
		font-size: 5vmin;
		/* 然后通过缩放设置想要的大小 */
		transform: scale(0.3);

		/* 定位到右下角空白处 */
		position: absolute;
		right: 1.5%;
		bottom: -47%;
	}

	.glitch {
		/* 都是用作动画的裁剪区域变量，可以按照自己的想法来 */
		--clip-0: polygon(0 0, 0 0, 0 0, 0 0);
		--clip-1: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
		--clip-2: polygon(
			0 80%,
			100% 80%,
			100% 100%,
			95% 100%,
			95% 90%,
			85% 90%,
			85% 100%,
			5% 100%,
			0 80%
		);
		--clip-3: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
		--clip-4: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
		--clip-5: polygon(0 40%, 100% 40%, 100% 85%, 4% 85%, 0 70%);
		--clip-6: polygon(0 63%, 100% 63%, 100% 80%, 3% 80%, 0 70%);
		--clip-7: polygon(0 10%, 100% 10%, 100% 0, 0 0);

		/* 默认隐藏故障的一层 */
		display: none;

		/* 显示故障的一层，稍微撑开一点距离，感觉大一点，再给个背景颜色 */
		inset: -0.5vmin;
		background-color: #02ffd3;
		/* 文字的左上角和右下角分别设置两个阴影，有一种重叠文字的效果 */
		text-shadow: -0.2vmin -0.2vmin #02ffd3, 0.2vmin 0.2vmin #fff700;

		/* 使用基础的显示区域 */
		clip-path: var(--clip-base);

		/* 定位叠中间 */
		position: absolute;
		/* 故障风格的动画 */
		animation: animate 2s infinite alternate;
	}
	.glitch::before {
		content: '';

		/* 显示故障层的红色区域，比青色的小一圈，然后盖住青色层 */
		inset: 0.2vmin 0.8vmin 0.6vmin 0.5vmin;
		background-color: #ff013c;

		/* 叠起来盖住 */
		position: absolute;
		/* 要比文字层级低，不然字就没了 */
		z-index: -1;
	}
	button:hover .glitch {
		/* 鼠标放上去就显示故障层 */
		display: block;
	}

	/* 
  动画就是简单的显示不同的裁剪区域
  然后时不时的左右移动一下
  配合上面的故障风格的文字和大小缩放 
  最后设计好动画的时间和步骤
*/
	@keyframes animate {
		0% {
			clip-path: var(--clip-1);
		}
		2% {
			clip-path: var(--clip-2);
			transform: translate(-1vmin);
		}
		6% {
			clip-path: var(--clip-2);
			transform: translate(1vmin);
		}
		8% {
			clip-path: var(--clip-2);
			transform: translate(-1vmin);
		}
		9% {
			clip-path: var(--clip-2);
		}
		10% {
			clip-path: var(--clip-3);
			transform: translate(1vmin);
		}
		13% {
			clip-path: var(--clip-3);
		}
		13.1% {
			clip-path: var(--clip-0);
			transform: translate(1vmin);
		}
		15% {
			clip-path: var(--clip-4);
			transform: translate(1vmin);
		}
		20% {
			clip-path: var(--clip-4);
			transform: translate(-1vmin);
		}
		20.1% {
			clip-path: var(--clip-0);
			transform: translate(1vmin);
		}
		25% {
			clip-path: var(--clip-5);
			transform: translate(1vmin);
		}
		30% {
			clip-path: var(--clip-5);
			transform: translate(-1vmin);
		}
		30.1% {
			clip-path: var(--clip-0);
		}
		35% {
			clip-path: var(--clip-6);
			transform: translate(-1vmin);
		}
		40% {
			clip-path: var(--clip-6);
			transform: translate(1vmin);
		}
		45% {
			clip-path: var(--clip-6);
			transform: translate(-1vmin);
		}
		50% {
			clip-path: var(--clip-6);
		}
		55% {
			clip-path: var(--clip-7);
			transform: translate(1vmin);
		}
		60% {
			clip-path: var(--clip-7);
		}
		60.1% {
			clip-path: var(--clip-0);
		}
		65% {
			clip-path: var(--clip-5);
			transform: translate(-1vmin);
		}
		68% {
			clip-path: var(--clip-5);
			transform: translate(1vmin);
		}
		80% {
			clip-path: var(--clip-0);
		}
		100% {
			clip-path: var(--clip-0);
		}
	}
</style>
