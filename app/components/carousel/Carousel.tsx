import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type PropType = {
	slides: Map<string, string>;
	options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [AutoScroll({ playOnInit: true })]);

	return (
		<section className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{Array.from(slides.entries()).map(([alt, src], index) => (
						<img className="embla__slide" key={index} src={src} alt={alt} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Carousel;
