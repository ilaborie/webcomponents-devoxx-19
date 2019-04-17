import { Component } from '@stencil/core';

@Component({
    tag: 'stencil-card-solution',
    styles: `
        :host {
            display: block;
            width: 256px;
            position: relative;
            border-radius: 2px;
            background: #fff;
            box-sizing: border-box;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            transition: all .3s cubic-bezier(.25, .8, .25, 1);
            margin-bottom: 15px;
        }
        .header {
			margin: 0;
            display: inline-block;
            padding: 5px 15px;
		}

        .title{
            margin-bottom: 10px;
			font-size: 18px;
			line-height: 18px;
        }

        .subtitle{
            margin-top: 0;
            margin-bottom: 0;
            color: gray;
			font-size: 15px;
			line-height: 15px;
        }

        .content{
            padding: 15px;
        }
    `,
    shadow: true,
})
export class StencilCardSolution {
    render() {
        return (
            <div>
                <div class="header">
                    <h2>
                        <slot name="title"></slot>
                    </h2>
                    <h3 class="subtitle">
                        <slot name="subtitle"></slot>
                    </h3>
                </div>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </div>
        );
    }
}