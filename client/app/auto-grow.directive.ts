import {Directive, ElementRef, Renderer} from 'angular2/core';


@Directive({
	selector: '[autoGrow]',
	host:{
		'(focus)' : 'onFocus()',
		'(blur)'  : 'onBlur()'
	}
})

export class AutoGrowDirective{
	
	//_el; _ underline means private
	//_renderer;
//ElementRef: which gives us access to the host element
// Renderer: which is a service that we used to modify that element
    
	constructor(private el: ElementRef, private renderer: Renderer){
		
	}
	onFocus(){
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '300px');
	}

	onBlur(){
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
	}
}