/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import MathType from '@wiris/mathtype-ckeditor5';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import TableClassesPlugin from "ckeditor5-table-classes/src/tableclasses";

import RepeaTableIcon from '../theme/icon/star.svg';

export default class BPTemplatesEditor extends DecoupledEditorBase {}

// Plugins to include in the build.
BPTemplatesEditor.builtinPlugins = [
	Essentials,
	Alignment,
	FontSize,
	FontFamily,
	FontColor,
	FontBackgroundColor,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Strikethrough,
	Underline,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Link,
	List,
	ListStyle,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	Autosave,
	Code,
	Highlight,
	HtmlEmbed,
	HorizontalLine,
	ImageResize,
	MathType,
	PageBreak,
	RemoveFormat,
	Subscript,
	Superscript,
	TableCellProperties,
	TableProperties,
	TodoList,
	TableClassesPlugin
];


const customColorPalette = [
	{ color: '#000000', label: 'Black' },
	{ color: '#4d4d4d', label: 'Dim grey' },
	{ color: '#999999', label: 'Grey' },
	{ color: '#e6e6e6', label: 'Light grey' },
	{ color: '#ffffff', label: 'White', hasBorder: !0 },
	{ color: '#e64c4c', label: 'Red' },
	{ color: '#e6994c', label: 'Orange' },
	{ color: '#e6e64c', label: 'Yellow' },
	{ color: '#99e64c', label: 'Light green' },
	{ color: '#4ce64c', label: 'Green' },
	{ color: '#4ce699', label: 'Aquamarine' },
	{ color: '#4ce6e6', label: 'Turquoise' },
	{ color: '#4c99e6', label: 'Light blue' },
	{ color: '#4c4ce6', label: 'Blue' },
	{ color: '#994ce6', label: 'Purple' }
];

// Editor configuration.
BPTemplatesEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'fontfamily',
			'fontsize',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'alignment',
			'numberedList',
			'bulletedList',
			'indent',
			'outdent',
			'|',
			'MathType',
			'ChemType',
			'|',
			'blockquote',
			'imageUpload',
			'insertTable',
			'htmlEmbed',
			'|',
			'undo',
			'redo'
		]
	},
	image: {
		styles: [
			'full',
			'alignLeft',
			'alignRight'
		],
		toolbar: [
			'imageStyle:alignLeft',
			'imageStyle:full',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		tableToolbar: ['tableclass-style1'],
		contentToolbar: [
			'tableColumn', 'tableRow', 'mergeTableCells',
			'tableProperties', 'tableCellProperties'
		],
		tableProperties: {
			borderColors: customColorPalette,
			backgroundColors: customColorPalette
		},

		// Set the palettes for table cells.
		tableCellProperties: {
			borderColors: customColorPalette,
			backgroundColors: customColorPalette
		}
	},
	TableClasses:{
		items:[
			{id:"style1",   classes:'--BPTEMPLATES-REPEATABLE--', icon:RepeaTableIcon},
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'es',

	fontBackgroundColor: {
		colors: customColorPalette
	},
	fontColor: {
		colors: customColorPalette
	}

};
