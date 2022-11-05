import styled from "styled-components";

export const StyledMindEditorContainer = styled.div`
  position: relative;
  height: 100%;
  margin: 0 -24px;
  border-top: 1px solid ${props => props.theme.borderColor};

  .km-view {
    font-family: "STHeitiSC-Light", "STHeiti", "Hei", "Heiti SC",
      "Microsoft Yahei", Arial, sans-serif;
    -webkit-user-select: none;
    user-select: none;
    position: relative;
  }

  .km-view .km-receiver {
    position: absolute;
    left: -99999px;
    top: -99999px;
    width: 20px;
    height: 20px;
    outline: none;
    margin: 0;
  }

  .km-view image {
    cursor: zoom-in;
  }

  .km-image-viewer {
    position: fixed;
    z-index: 99999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.75);
  }

  .km-image-viewer .km-image-viewer-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    white-space: nowrap;
    overflow: auto;
  }

  .km-image-viewer .km-image-viewer-container::before {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    font-size: 0;
    vertical-align: middle;
  }

  .km-image-viewer .km-image-viewer-container img {
    cursor: zoom-out;
    vertical-align: middle;
  }

  .km-image-viewer .km-image-viewer-container img.limited {
    cursor: zoom-in;
    max-width: 100%;
    max-height: 100%;
  }

  .km-image-viewer .km-image-viewer-toolbar {
    z-index: 1;
    background: rgba(0, 0, 0, 0.75);
    text-align: right;
    transition: all 0.25s;
  }

  .km-image-viewer .km-image-viewer-toolbar.hidden {
    transform: translate(0, -100%);
    opacity: 0;
  }

  .km-image-viewer .km-image-viewer-btn {
    cursor: pointer;
    outline: 0;
    border: 0;
    width: 44px;
    height: 44px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY0IiBoZWlnaHQ9Ijg4IiB2aWV3Qm94PSIwIDAgMjY0IDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5kZWZhdWx0LXNraW4gMjwvdGl0bGU+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Zz48cGF0aCBkPSJNNjcuMDAyIDU5LjV2My43NjhjLTYuMzA3Ljg0LTkuMTg0IDUuNzUtMTAuMDAyIDkuNzMyIDIuMjItMi44MyA1LjU2NC01LjA5OCAxMC4wMDItNS4wOThWNzEuNUw3MyA2NS41ODUgNjcuMDAyIDU5LjV6IiBpZD0iU2hhcGUiIGZpbGw9IiNmZmYiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTMgMjl2LTVoMnYzaDN2MmgtNXpNMTMgMTVoNXYyaC0zdjNoLTJ2LTV6TTMxIDE1djVoLTJ2LTNoLTN2LTJoNXpNMzEgMjloLTV2LTJoM3YtM2gydjV6IiBpZD0iU2hhcGUiLz48L2c+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTYyIDI0djVoLTJ2LTNoLTN2LTJoNXpNNjIgMjBoLTV2LTJoM3YtM2gydjV6TTcwIDIwdi01aDJ2M2gzdjJoLTV6TTcwIDI0aDV2MmgtM3YzaC0ydi01eiIvPjwvZz48cGF0aCBkPSJNMjAuNTg2IDY2bC01LjY1Ni01LjY1NiAxLjQxNC0xLjQxNEwyMiA2NC41ODZsNS42NTYtNS42NTYgMS40MTQgMS40MTRMMjMuNDE0IDY2bDUuNjU2IDUuNjU2LTEuNDE0IDEuNDE0TDIyIDY3LjQxNGwtNS42NTYgNS42NTYtMS40MTQtMS40MTRMMjAuNTg2IDY2eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMTEuNzg1IDY1LjAzTDExMCA2My41bDMtMy41aC0xMHYtMmgxMGwtMy0zLjUgMS43ODUtMS40NjhMMTE3IDU5bC01LjIxNSA2LjAzeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNTIuMjE1IDY1LjAzTDE1NCA2My41bC0zLTMuNWgxMHYtMmgtMTBsMy0zLjUtMS43ODUtMS40NjhMMTQ3IDU5bDUuMjE1IDYuMDN6IiBmaWxsPSIjZmZmIi8+PGc+PHBhdGggaWQ9IlJlY3RhbmdsZS0xMSIgZmlsbD0iI2ZmZiIgZD0iTTE2MC45NTcgMjguNTQzbC0zLjI1LTMuMjUtMS40MTMgMS40MTQgMy4yNSAzLjI1eiIvPjxwYXRoIGQ9Ik0xNTIuNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIGlkPSJPdmFsLTEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUwIDIxaDV2MWgtNXoiLz48L2c+PGc+PHBhdGggZD0iTTExNi45NTcgMjguNTQzbC0xLjQxNCAxLjQxNC0zLjI1LTMuMjUgMS40MTQtMS40MTQgMy4yNSAzLjI1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMDguNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA2IDIxaDV2MWgtNXoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA5LjA0MyAxOS4wMDhsLS4wODUgNS0xLS4wMTcuMDg1LTV6Ii8+PC9nPjwvZz48L2c+PC9zdmc+);
  }

  .km-image-viewer .km-image-viewer-toolbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .km-image-viewer .km-image-viewer-close {
    background-position: 0 -44px;
  }

  .km-editor {
    overflow: hidden;
    z-index: 2;
  }
  .km-editor > .mask {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: transparent;
  }
  .km-editor > .receiver {
    position: absolute;
    background: white;
    outline: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    padding: 3px 5px;
    margin-left: -3px;
    margin-top: -5px;
    max-width: 300px;
    width: auto;
    font-size: 14px;
    line-height: 1.4em;
    min-height: 1.4em;
    box-sizing: border-box;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    border: none;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
  }
  .km-editor > .receiver.debug {
    opacity: 1;
    outline: 1px solid green;
    background: none;
    z-index: 0;
  }
  .km-editor > .receiver.input {
    pointer-events: all;
    opacity: 1;
    z-index: 999;
    background: white;
    outline: none;
  }
  div.minder-editor-container {
    position: absolute;
    top: 40px;
    bottom: 0;
    left: 0;
    right: 0;
    font-family: Arial, "Hiragino Sans GB", "Microsoft YaHei",
      "WenQuanYi Micro Hei", sans-serif;
  }
  .minder-editor {
    position: absolute;
    top: 92px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .minder-viewer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .control-panel {
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    bottom: 0;
    border-left: 1px solid #ccc;
  }
  .minder-divider {
    position: absolute;
    top: 0;
    right: 250px;
    bottom: 0;
    width: 2px;
    background-color: #fbfbfb;
    cursor: ew-resize;
  }
  .panel-body {
    padding: 10px;
  }
  .upload-image {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .top-tab .nav-tabs {
    background-color: #e1e1e1;
    border: 0;
    height: 32px;
  }
  .top-tab .nav-tabs li {
    margin: 0;
  }
  .top-tab .nav-tabs li a {
    margin: 0;
    border: 0;
    padding: 6px 15px;
    border-radius: 0;
    vertical-align: middle;
  }
  .top-tab .nav-tabs li a:hover,
  .top-tab .nav-tabs li a:focus {
    background: inherit;
    border: 0;
  }
  .top-tab .nav-tabs li.active a {
    border: 0;
    background-color: #fff;
  }
  .top-tab .nav-tabs li.active a:hover,
  .top-tab .nav-tabs li.active a:focus {
    border: 0;
  }
  .top-tab .tab-content {
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #dbdbdb;
  }
  .top-tab .tab-pane {
    font-size: 0;
  }
  .km-btn-group {
    display: inline-block;
    margin: 5px 0;
    padding: 0 5px;
    vertical-align: middle;
    border-right: 1px dashed #eee;
  }
  .km-btn-item {
    display: inline-block;
    margin: 0 3px;
    font-size: 0;
    cursor: default;
  }
  .km-btn-item[disabled] {
    opacity: 0.5;
  }
  .km-btn-item[disabled]:hover,
  .km-btn-item[disabled]:active {
    background-color: #fff;
  }
  .km-btn-item .km-btn-icon {
    display: inline-block;
    background: url(images/icons.png) no-repeat;
    background-position: 0 20px;
    width: 20px;
    height: 20px;
    padding: 2px;
    margin: 1px;
    vertical-align: middle;
  }
  .km-btn-item .km-btn-caption {
    display: inline-block;
    font-size: 12px;
    vertical-align: middle;
  }
  .km-btn-item:hover {
    background-color: #eff3fa;
  }
  .km-btn-item:active {
    background-color: #c4d0ee;
  }
  .do-group {
    width: 38px;
  }
  .undo .km-btn-icon {
    background-position: 0 -1240px;
  }
  .redo .km-btn-icon {
    background-position: 0 -1220px;
  }
  .append-group {
    width: 212px;
  }
  .append-child-node .km-btn-icon {
    background-position: 0 0;
  }
  .append-sibling-node .km-btn-icon {
    background-position: 0 -20px;
  }
  .append-parent-node .km-btn-icon {
    background-position: 0 -40px;
  }
  .arrange-group {
    width: 64px;
  }
  .arrange-up .km-btn-icon {
    background-position: 0 -280px;
  }
  .arrange-down .km-btn-icon {
    background-position: 0 -300px;
  }
  .operation-group {
    width: 64px;
  }
  .edit-node .km-btn-icon {
    background-position: 0 -60px;
  }
  .remove-node .km-btn-icon {
    background-position: 0 -80px;
  }
  .btn-group-vertical {
    vertical-align: middle;
    margin: 5px;
  }
  .btn-group-vertical .hyperlink,
  .btn-group-vertical .hyperlink-caption {
    width: 40px;
    margin: 0;
    padding: 0;
    border: none !important;
    border-radius: 0 !important;
  }
  .btn-group-vertical .hyperlink:hover,
  .btn-group-vertical .hyperlink-caption:hover {
    background-color: #eff3fa;
  }
  .btn-group-vertical .hyperlink:active,
  .btn-group-vertical .hyperlink-caption:active {
    background-color: #c4d0ee;
  }
  .btn-group-vertical .hyperlink.active,
  .btn-group-vertical .hyperlink-caption.active {
    box-shadow: none;
    background-color: #eff3fa;
  }
  .btn-group-vertical .hyperlink {
    height: 25px;
    background: url(images/icons.png) no-repeat center -100px;
  }
  .btn-group-vertical .hyperlink-caption {
    height: 20px;
  }
  .btn-group-vertical .hyperlink-caption .caption {
    font-size: 12px;
  }
  .open > .dropdown-toggle.btn-default {
    background-color: #eff3fa;
  }
  .btn-group-vertical .image-btn,
  .btn-group-vertical .image-btn-caption {
    width: 40px;
    margin: 0;
    padding: 0;
    border: none !important;
    border-radius: 0 !important;
  }
  .btn-group-vertical .image-btn:hover,
  .btn-group-vertical .image-btn-caption:hover {
    background-color: #eff3fa;
  }
  .btn-group-vertical .image-btn:active,
  .btn-group-vertical .image-btn-caption:active {
    background-color: #c4d0ee;
  }
  .btn-group-vertical .image-btn.active,
  .btn-group-vertical .image-btn-caption.active {
    box-shadow: none;
    background-color: #eff3fa;
  }
  .btn-group-vertical .image-btn {
    height: 25px;
    background: url(images/icons.png) no-repeat center -125px;
  }
  .btn-group-vertical .image-btn-caption {
    height: 20px;
  }
  .btn-group-vertical .image-btn-caption .caption {
    font-size: 12px;
  }
  .image-preview {
    display: block;
    max-width: 50%;
  }
  .modal-body .tab-pane {
    font-size: inherit;
    padding-top: 15px;
  }
  .search-result {
    margin-top: 15px;
    height: 370px;
    overflow: hidden;
  }
  .search-result ul {
    margin: 0;
    padding: 0;
    list-style: none;
    clear: both;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .search-result ul li {
    list-style: none;
    float: left;
    display: block;
    width: 130px;
    height: 130px;
    line-height: 130px;
    margin: 6px;
    padding: 0;
    font-size: 12px;
    position: relative;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #fcfcfc;
  }
  .search-result ul li.selected {
    border: 2px solid #fc8383;
  }
  .search-result ul li img {
    max-width: 126px;
    max-height: 130px;
    vertical-align: middle;
  }
  .search-result ul li span {
    display: block;
    position: absolute;
    bottom: 0;
    height: 20px;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    right: 0;
    color: white;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
    opacity: 0;
    -webkit-transform: translate(0, 20px);
    -ms-transform: translate(0, 20px);
    transform: translate(0, 20px);
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  .search-result ul li:hover span {
    opacity: 1;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  @media (min-width: 768px) {
    .form-inline .form-control {
      width: 422px;
    }
  }
  .btn-group-vertical {
    vertical-align: top;
    margin: 5px;
  }
  .btn-group-vertical.note-btn-group {
    border-right: 1px dashed #eee;
    padding-right: 5px;
  }
  .btn-group-vertical .note-btn,
  .btn-group-vertical .note-btn-caption {
    width: 40px;
    margin: 0;
    padding: 0;
    border: none !important;
    border-radius: 0 !important;
  }
  .btn-group-vertical .note-btn:hover,
  .btn-group-vertical .note-btn-caption:hover {
    background-color: #eff3fa;
  }
  .btn-group-vertical .note-btn:active,
  .btn-group-vertical .note-btn-caption:active {
    background-color: #c4d0ee;
  }
  .btn-group-vertical .note-btn.active,
  .btn-group-vertical .note-btn-caption.active {
    box-shadow: none;
    background-color: #eff3fa;
  }
  .btn-group-vertical .note-btn {
    height: 25px;
    background: url(images/icons.png) no-repeat center -1150px;
  }
  .btn-group-vertical .note-btn-caption {
    height: 20px;
  }
  .btn-group-vertical .note-btn-caption .caption {
    font-size: 12px;
  }
  .open > .dropdown-toggle.btn-default {
    background-color: #eff3fa;
  }
  .gfm-render {
    font-size: 12px;
    color: #333;
    line-height: 1.8em;
  }
  .gfm-render blockquote,
  .gfm-render ul,
  .gfm-render table,
  .gfm-render p,
  .gfm-render pre,
  .gfm-render hr {
    margin: 1em 0;
    cursor: text;
  }
  .gfm-render blockquote:first-child:last-child,
  .gfm-render ul:first-child:last-child,
  .gfm-render table:first-child:last-child,
  .gfm-render p:first-child:last-child,
  .gfm-render pre:first-child:last-child,
  .gfm-render hr:first-child:last-child {
    margin: 0;
  }
  .gfm-render img {
    max-width: 100%;
  }
  .gfm-render a {
    color: blue;
  }
  .gfm-render a:hover {
    color: red;
  }
  .gfm-render blockquote {
    display: block;
    border-left: 4px solid #e4ad91;
    color: #da8e68;
    padding-left: 10px;
    font-style: italic;
    margin-left: 2em;
  }
  .gfm-render ul,
  .gfm-render ol {
    padding-left: 3em;
  }
  .gfm-render table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
  }
  .gfm-render table th,
  .gfm-render table td {
    border: 1px solid #666;
    padding: 2px 4px;
  }
  .gfm-render table th {
    background: rgba(45, 141, 234, 0.2);
  }
  .gfm-render table tr:nth-child(even) td {
    background: rgba(45, 141, 234, 0.03);
  }
  .gfm-render em {
    color: red;
  }
  .gfm-render del {
    color: #999;
  }
  .gfm-render pre {
    background: rgba(45, 141, 234, 0.1);
    padding: 5px;
    border-radius: 5px;
    word-break: break-all;
    word-wrap: break-word;
  }
  .gfm-render code {
    background: rgba(45, 141, 234, 0.1);
    /*         display: inline-block; */
    padding: 0 5px;
    border-radius: 3px;
  }
  .gfm-render pre code {
    background: none;
  }
  .gfm-render hr {
    border: none;
    border-top: 1px solid #ccc;
  }
  .gfm-render .highlight {
    background: yellow;
    color: red;
  }
  .km-note {
    width: 300px;
    border-left: 1px solid #babfcd;
    padding: 5px 10px;
    background: white;
    position: absolute;
    top: 92px;
    right: 0;
    bottom: 0;
    left: auto;
    z-index: 3;
  }
  .km-note.panel {
    margin: 0;
    padding: 0;
  }
  .km-note.panel .panel-heading h3 {
    display: inline-block;
  }
  .km-note.panel .panel-heading .close-note-editor {
    width: 15px;
    height: 15px;
    display: inline-block;
  }
  .km-note.panel .panel-heading .close-note-editor:hover {
    cursor: pointer;
  }
  .km-note.panel .panel-body {
    padding: 0;
  }
  .km-note .CodeMirror {
    position: absolute;
    top: 41px;
    bottom: 0;
    height: auto;
    cursor: text;
    font-size: 14px;
    line-height: 1.3em;
    font-family: consolas;
  }
  .km-note-tips {
    color: #ccc;
    padding: 3px 8px;
  }
  #previewer-content {
    position: absolute;
    background: #ffd;
    padding: 5px 15px;
    border-radius: 5px;
    max-width: 400px;
    max-height: 200px;
    overflow: auto;
    z-index: 10;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    word-break: break-all;
    font-size: 12px;
    color: #333;
    line-height: 1.8em;
  }
  #previewer-content blockquote,
  #previewer-content ul,
  #previewer-content table,
  #previewer-content p,
  #previewer-content pre,
  #previewer-content hr {
    margin: 1em 0;
    cursor: text;
  }
  #previewer-content blockquote:first-child:last-child,
  #previewer-content ul:first-child:last-child,
  #previewer-content table:first-child:last-child,
  #previewer-content p:first-child:last-child,
  #previewer-content pre:first-child:last-child,
  #previewer-content hr:first-child:last-child {
    margin: 0;
  }
  #previewer-content img {
    max-width: 100%;
  }
  #previewer-content a {
    color: blue;
  }
  #previewer-content a:hover {
    color: red;
  }
  #previewer-content blockquote {
    display: block;
    border-left: 4px solid #e4ad91;
    color: #da8e68;
    padding-left: 10px;
    font-style: italic;
    margin-left: 2em;
  }
  #previewer-content ul,
  #previewer-content ol {
    padding-left: 3em;
  }
  #previewer-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
  }
  #previewer-content table th,
  #previewer-content table td {
    border: 1px solid #666;
    padding: 2px 4px;
  }
  #previewer-content table th {
    background: rgba(45, 141, 234, 0.2);
  }
  #previewer-content table tr:nth-child(even) td {
    background: rgba(45, 141, 234, 0.03);
  }
  #previewer-content em {
    color: red;
  }
  #previewer-content del {
    color: #999;
  }
  #previewer-content pre {
    background: rgba(45, 141, 234, 0.1);
    padding: 5px;
    border-radius: 5px;
    word-break: break-all;
    word-wrap: break-word;
  }
  #previewer-content code {
    background: rgba(45, 141, 234, 0.1);
    /*         display: inline-block; */
    padding: 0 5px;
    border-radius: 3px;
  }
  #previewer-content pre code {
    background: none;
  }
  #previewer-content hr {
    border: none;
    border-top: 1px solid #ccc;
  }
  #previewer-content .highlight {
    background: yellow;
    color: red;
  }
  #previewer-content.ng-hide {
    display: block !important;
    left: -99999px !important;
    top: -99999px !important;
  }
  .panel-body {
    padding: 10px;
  }
  .tab-content .km-priority {
    vertical-align: middle;
    font-size: inherit;
    display: inline-block;
    width: 140px;
    margin: 5px;
    border-right: 1px dashed #eee;
  }
  .tab-content .km-priority .km-priority-item {
    margin: 0 1px;
    padding: 1px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon {
    background: url(images/iconpriority.png) repeat-y;
    background-color: transparent;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-0 {
    background-position: 0 20px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-1 {
    background-position: 0 0px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-2 {
    background-position: 0 -20px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-3 {
    background-position: 0 -40px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-4 {
    background-position: 0 -60px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-5 {
    background-position: 0 -80px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-6 {
    background-position: 0 -100px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-7 {
    background-position: 0 -120px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-8 {
    background-position: 0 -140px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-9 {
    background-position: 0 -160px;
  }
  .tab-content .km-progress {
    vertical-align: middle;
    font-size: inherit;
    display: inline-block;
    width: 140px;
    margin: 5px;
    border-right: 1px dashed #eee;
  }
  .tab-content .km-progress .km-progress-item {
    margin: 0 1px;
    padding: 1px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon {
    background: url(images/iconprogress.png) repeat-y;
    background-color: transparent;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-0 {
    background-position: 0 20px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-1 {
    background-position: 0 0px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-2 {
    background-position: 0 -20px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-3 {
    background-position: 0 -40px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-4 {
    background-position: 0 -60px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-5 {
    background-position: 0 -80px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-6 {
    background-position: 0 -100px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-7 {
    background-position: 0 -120px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-8 {
    background-position: 0 -140px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-9 {
    background-position: 0 -160px;
  }
  .resource-editor {
    vertical-align: middle;
    display: inline-block;
    margin: 5px;
  }
  .resource-editor .input-group,
  .resource-editor .km-resource {
    font-size: 12px;
  }
  .resource-editor .input-group {
    height: 20px;
    width: 168px;
  }
  .resource-editor .resource-dropdown {
    position: relative;
    width: 168px;
    border: 1px solid #ccc;
    margin-top: -1px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .resource-editor .resource-dropdown .km-resource {
    position: absolute;
    width: 154px;
    margin-bottom: 3px;
    padding: 0;
    list-style-type: none;
    overflow: scroll;
    max-height: 500px;
  }
  .resource-editor .resource-dropdown .km-resource.open {
    z-index: 3;
    background-color: #fff;
  }
  .resource-editor .resource-dropdown .km-resource li {
    display: inline-block;
    padding: 1px 2px;
    border-radius: 4px;
    margin: 2px 3px;
  }
  .resource-editor .resource-dropdown .km-resource li[disabled] {
    opacity: 0.5;
  }
  .resource-editor .resource-dropdown .resource-caret {
    display: block;
    float: right;
    width: 12px;
    height: 24px;
    padding: 8px 1px;
  }
  .resource-editor .resource-dropdown .resource-caret:hover {
    background-color: #eff3fa;
  }
  .resource-editor .resource-dropdown .resource-caret:active {
    background-color: #c4d0ee;
  }
  .resource-editor input.form-control,
  .resource-editor .btn {
    font-size: 12px;
  }
  .resource-editor input.form-control {
    padding: 2px 4px;
    height: 24px;
    border-bottom-left-radius: 0;
  }
  .resource-editor .input-group-btn {
    line-height: 24px;
  }
  .resource-editor .input-group-btn .btn {
    padding: 2px 4px;
    height: 24px;
    border-bottom-right-radius: 0;
  }
  .temp-panel {
    margin: 5px 5px 5px 10px;
    border-right: 1px dashed #eee;
    display: inline-block;
    vertical-align: middle;
  }
  .temp-list {
    min-width: 124px;
  }
  .temp-item-wrap {
    width: 50px;
    height: 40px;
    padding: 0 2px;
    margin: 5px;
    display: inline-block;
  }
  .temp-item {
    display: inline-block;
    width: 50px;
    height: 40px;
    background-image: url(images/template.png);
    background-repeat: no-repeat;
  }
  .temp-item.default {
    background-position: 0 0;
  }
  .temp-item.structure {
    background-position: -50px 0;
  }
  .temp-item.filetree {
    background-position: -100px 0;
  }
  .temp-item.right {
    background-position: -150px 0;
  }
  .temp-item.fish-bone {
    background-position: -200px 0;
  }
  .temp-item.tianpan {
    background-position: -250px 0;
  }
  .current-temp-item {
    width: 74px;
    padding: 0 0 0 5px;
    border: 1px solid #fff;
  }
  .current-temp-item:hover {
    background-color: #eff3fa;
  }
  .current-temp-item[disabled] {
    opacity: 0.5;
  }
  .current-temp-item .caret {
    margin-left: 5px;
  }
  .temp-item-selected {
    background-color: #87a9da;
  }
  .theme-panel {
    height: 42px;
    margin: 5px;
    padding: 0 5px 0 0;
    border-right: 1px dashed #eee;
    display: inline-block;
    vertical-align: middle;
  }
  .theme-list {
    min-width: 162px;
  }
  div a.theme-item {
    display: inline-block;
    width: 70px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    padding: 0 5px;
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }
  .theme-item-selected {
    width: 100px;
    padding: 6px 7px;
    border: 1px solid #fff;
  }
  .theme-item-selected:hover {
    background-color: #eff3fa;
  }
  .theme-item-selected .caret {
    margin-left: 5px;
  }
  .theme-item-selected[disabled] {
    opacity: 0.5;
  }
  .theme-item-wrap {
    display: inline-block;
    width: 80px;
    height: 40px;
    padding: 5px;
  }
  .theme-item-wrap:hover {
    background-color: #eff3fa;
  }
  .readjust-layout {
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px 0 5px;
    border-right: 1px dashed #eee;
  }
  .btn-icon {
    width: 25px;
    height: 25px;
    margin-left: 12px;
    display: block;
  }
  .btn-label {
    font-size: 12px;
  }
  .btn-wrap {
    width: 50px;
    height: 42px;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
  }
  .btn-wrap[disabled] span {
    opacity: 0.5;
  }
  .btn-wrap[disabled] {
    cursor: default;
  }
  .btn-wrap[disabled]:hover {
    background-color: transparent;
  }
  .btn-wrap[disabled]:active {
    background-color: transparent;
  }
  .btn-wrap:link {
    text-decoration: none;
  }
  .btn-wrap:visited {
    text-decoration: none;
  }
  .btn-wrap:hover {
    background-color: #eff3fa;
    text-decoration: none;
  }
  .btn-wrap:active {
    background-color: #c4d0ee;
  }
  .reset-layout-icon {
    background: url(images/icons.png) no-repeat;
    background-position: 0 -150px;
  }
  .style-operator {
    display: inline-block;
    vertical-align: middle;
    padding: 0 5px;
    border-right: 1px dashed #eee;
  }
  .style-operator .clear-style {
    vertical-align: middle;
  }
  .clear-style-icon {
    background: url(images/icons.png) no-repeat;
    background-position: 0 -175px;
  }
  .s-btn-group-vertical {
    display: inline-block;
    vertical-align: middle;
  }
  .s-btn-icon {
    width: 20px;
    height: 20px;
    margin-right: 3px;
    display: inline-block;
    vertical-align: middle;
  }
  .s-btn-label {
    font-size: 12px;
    vertical-align: middle;
    display: inline-block;
  }
  .s-btn-wrap {
    padding: 0 5px 0 3px;
    display: inline-block;
    text-decoration: none;
    font-size: 0;
  }
  .s-btn-wrap[disabled] span {
    opacity: 0.5;
  }
  .s-btn-wrap[disabled] {
    cursor: default;
  }
  .s-btn-wrap[disabled]:hover {
    background-color: transparent;
  }
  .s-btn-wrap[disabled]:active {
    background-color: transparent;
  }
  .s-btn-wrap:hover {
    background-color: #eff3fa;
    text-decoration: none;
  }
  .s-btn-wrap:active {
    background-color: #c4d0ee;
  }
  .copy-style-icon {
    background: url(images/icons.png) no-repeat;
    background-position: 0 -200px;
  }
  .paste-style-wrap {
    display: block;
  }
  .paste-style-icon {
    background: url(images/icons.png) no-repeat;
    background-position: 0 -220px;
  }
  .font-operator {
    width: 170px;
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    padding: 0 5px;
  }
  .font-operator .font-size-list {
    display: inline-block;
    border: 1px solid #eee;
    padding: 2px 4px;
  }
  .font-operator .font-family-list {
    display: inline-block;
    border: 1px solid #eee;
    padding: 2px 4px;
  }
  .current-font-item a {
    text-decoration: none;
    display: inline-block;
  }
  .current-font-family {
    width: 75px;
    height: 18px;
    overflow: hidden;
    vertical-align: bottom;
  }
  .current-font-size {
    width: 32px;
    height: 18px;
    overflow: hidden;
    vertical-align: bottom;
  }
  .current-font-item[disabled] {
    opacity: 0.5;
  }
  .font-item {
    line-height: 1em;
    text-align: left;
  }
  .font-item-selected {
    background-color: #87a9da;
  }
  .font-bold,
  .font-italics {
    display: inline-block;
    background: url(images/icons.png) no-repeat;
    cursor: pointer;
    margin: 0 3px;
  }
  .font-bold:hover,
  .font-italics:hover {
    background-color: #eff3fa;
  }
  .font-bold:active,
  .font-italics:active {
    background-color: #c4d0ee;
  }
  .font-bold[disabled],
  .font-italics[disabled] {
    opacity: 0.5;
  }
  .font-bold {
    background-position: 0 -240px;
  }
  .font-italics {
    background-position: 0 -260px;
  }
  .font-bold-selected,
  .font-italics-selected {
    background-color: #87a9da;
  }
  .font-color-wrap {
    display: inline-block;
    width: 30px;
    height: 22px;
    margin: 3px 3px 0 0;
    border: 1px #efefef solid;
    vertical-align: middle;
    font-size: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .font-color-wrap[disabled] {
    opacity: 0.5;
  }
  .font-color-wrap .quick-font-color {
    display: inline-block;
    width: 20px;
    height: 16px;
    font-size: 14px;
    line-height: 16px;
    vertical-align: top;
    text-align: center;
    cursor: default;
    color: #000;
  }
  .font-color-wrap .quick-font-color:hover {
    background-color: #eff3fa;
  }
  .font-color-wrap .quick-font-color:active {
    background-color: #c4d0ee;
  }
  .font-color-wrap .quick-font-color[disabled] {
    opacity: 0.5;
  }
  .font-color-wrap .font-color-preview {
    display: inline-block;
    width: 12px;
    height: 2px;
    margin: 0 4px 0;
    background-color: #000;
  }
  .font-color-wrap .font-color-preview[disabled] {
    opacity: 0.5;
  }
  .font-color {
    display: inline-block;
    width: 8px;
    height: 16px;
  }
  .font-color:hover {
    background-color: #eff3fa;
  }
  .font-color:active {
    background-color: #c4d0ee;
  }
  .font-color[disabled] {
    opacity: 0.5;
  }
  .font-color .caret {
    margin-left: -2px;
    margin-top: 7px;
  }
  .bg-color-wrap {
    display: inline-block;
    width: 30px;
    height: 22px;
    margin: 3px 3px 0 0;
    border: 1px #efefef solid;
    vertical-align: middle;
    font-size: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .bg-color-wrap[disabled] {
    opacity: 0.5;
  }
  .bg-color-wrap .quick-bg-color {
    display: inline-block;
    width: 20px;
    height: 16px;
    font-size: 14px;
    line-height: 16px;
    vertical-align: top;
    text-align: center;
    cursor: default;
    color: #000;
    background: url(images/icons.png) no-repeat center -1260px;
  }
  .bg-color-wrap .quick-bg-color:hover {
    background-color: #eff3fa;
  }
  .bg-color-wrap .quick-bg-color:active {
    background-color: #c4d0ee;
  }
  .bg-color-wrap .quick-bg-color[disabled] {
    opacity: 0.5;
  }
  .bg-color-wrap .bg-color-preview {
    display: inline-block;
    width: 12px;
    height: 2px;
    margin: 0 4px 0;
    background-color: #fff;
  }
  .bg-color-wrap .bg-color-preview[disabled] {
    opacity: 0.5;
  }
  .bg-color {
    display: inline-block;
    width: 8px;
    height: 16px;
  }
  .bg-color:hover {
    background-color: #eff3fa;
  }
  .bg-color:active {
    background-color: #c4d0ee;
  }
  .bg-color[disabled] {
    opacity: 0.5;
  }
  .bg-color .caret {
    margin-left: -2px;
    margin-top: 7px;
  }
  .btn-group-vertical {
    vertical-align: middle;
    margin: 5px;
  }
  .btn-group-vertical .expand,
  .btn-group-vertical .expand-caption {
    width: 40px;
    margin: 0;
    padding: 0;
    border: none !important;
    border-radius: 0 !important;
  }
  .btn-group-vertical .expand:hover,
  .btn-group-vertical .expand-caption:hover {
    background-color: #eff3fa;
  }
  .btn-group-vertical .expand:active,
  .btn-group-vertical .expand-caption:active {
    background-color: #c4d0ee;
  }
  .btn-group-vertical .expand.active,
  .btn-group-vertical .expand-caption.active {
    box-shadow: none;
    background-color: #eff3fa;
  }
  .btn-group-vertical .expand {
    height: 25px;
    background: url(images/icons.png) no-repeat 0 -995px;
    background-position-x: 50%;
  }
  .btn-group-vertical .expand-caption {
    height: 20px;
  }
  .btn-group-vertical .expand-caption .caption {
    font-size: 12px;
  }
  .btn-group-vertical {
    vertical-align: middle;
    margin: 5px;
  }
  .btn-group-vertical .select,
  .btn-group-vertical .select-caption {
    width: 40px;
    margin: 0;
    padding: 0;
    border: none !important;
    border-radius: 0 !important;
  }
  .btn-group-vertical .select:hover,
  .btn-group-vertical .select-caption:hover {
    background-color: #eff3fa;
  }
  .btn-group-vertical .select:active,
  .btn-group-vertical .select-caption:active {
    background-color: #c4d0ee;
  }
  .btn-group-vertical .select.active,
  .btn-group-vertical .select-caption.active {
    box-shadow: none;
    background-color: #eff3fa;
  }
  .btn-group-vertical .select {
    height: 25px;
    background: url(images/icons.png) no-repeat 7px -1175px;
  }
  .btn-group-vertical .select-caption {
    height: 20px;
  }
  .btn-group-vertical .select-caption .caption {
    font-size: 12px;
  }
  .btn-group-vertical {
    vertical-align: middle;
    margin: 5px;
  }
  .btn-group-vertical .search,
  .btn-group-vertical .search-caption {
    width: 40px;
    margin: 0;
    padding: 0;
    border: none !important;
    border-radius: 0 !important;
  }
  .btn-group-vertical .search:hover,
  .btn-group-vertical .search-caption:hover {
    background-color: #eff3fa;
  }
  .btn-group-vertical .search:active,
  .btn-group-vertical .search-caption:active {
    background-color: #c4d0ee;
  }
  .btn-group-vertical .search.active,
  .btn-group-vertical .search-caption.active {
    box-shadow: none;
    background-color: #eff3fa;
  }
  .btn-group-vertical .search {
    height: 25px;
    background: url(images/icons.png) no-repeat 0 -345px;
    background-position-x: 50%;
  }
  .btn-group-vertical .search-caption {
    height: 20px;
  }
  .btn-group-vertical .search-caption .caption {
    font-size: 12px;
  }
  .search-box {
    float: right;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    position: relative;
    top: 0;
    z-index: 3;
    width: 360px;
    height: 40px;
    padding: 3px 6px;
    opacity: 1;
  }
  .search-box .search-input-wrap,
  .search-box .prev-and-next-btn {
    float: left;
  }
  .search-box .close-search {
    float: right;
    height: 16px;
    width: 16px;
    padding: 1px;
    border-radius: 100%;
    margin-top: 6px;
    margin-right: 10px;
  }
  .search-box .close-search .glyphicon {
    top: -1px;
  }
  .search-box .close-search:hover {
    background-color: #efefef;
  }
  .search-box .close-search:active {
    background-color: #999;
  }
  .search-box .search-input-wrap {
    width: 240px;
  }
  .search-box .prev-and-next-btn {
    margin-left: 5px;
  }
  .search-box .prev-and-next-btn .btn:focus {
    outline: none;
  }
  .search-box .search-addon {
    background-color: #fff;
  }
  .tool-group {
    padding: 0;
  }
  .tool-group[disabled] {
    opacity: 0.5;
  }
  .tool-group .tool-group-item {
    display: inline-block;
    border-radius: 4px;
  }
  .tool-group .tool-group-item .tool-group-icon {
    width: 20px;
    height: 20px;
    padding: 2px;
    margin: 1px;
  }
  .tool-group .tool-group-item:hover {
    background-color: #eff3fa;
  }
  .tool-group .tool-group-item:active {
    background-color: #c4d0ee;
  }
  .tool-group .tool-group-item.active {
    background-color: #c4d0ee;
  }
  .nav-bar {
    position: absolute;
    width: 35px;
    height: 240px;
    padding: 5px 0;
    left: 10px;
    bottom: 10px;
    background: #fc8383;
    color: #fff;
    border-radius: 4px;
    z-index: 10;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    transition: -webkit-transform 0.7s 0.1s ease;
    transition: transform 0.7s 0.1s ease;
  }
  .nav-bar .nav-btn {
    width: 35px;
    height: 24px;
    line-height: 24px;
    text-align: center;
  }
  .nav-bar .nav-btn .icon {
    background: url(images/icons.png);
    width: 20px;
    height: 20px;
    margin: 2px auto;
    display: block;
  }
  .nav-bar .nav-btn.active {
    background-color: #5a6378;
  }
  .nav-bar .zoom-in .icon {
    background-position: 0 -730px;
  }
  .nav-bar .zoom-out .icon {
    background-position: 0 -750px;
  }
  .nav-bar .hand .icon {
    background-position: 0 -770px;
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }
  .nav-bar .camera .icon {
    background-position: 0 -870px;
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }
  .nav-bar .nav-trigger .icon {
    background-position: 0 -845px;
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }
  .nav-bar .zoom-pan {
    width: 2px;
    height: 70px;
    box-shadow: 0 1px #e50000;
    position: relative;
    background: white;
    margin: 3px auto;
    overflow: visible;
  }
  .nav-bar .zoom-pan .origin {
    position: absolute;
    width: 20px;
    height: 8px;
    left: -9px;
    margin-top: -4px;
    background: transparent;
  }
  .nav-bar .zoom-pan .origin:after {
    content: " ";
    display: block;
    width: 6px;
    height: 2px;
    background: white;
    left: 7px;
    top: 3px;
    position: absolute;
  }
  .nav-bar .zoom-pan .indicator {
    position: absolute;
    width: 8px;
    height: 8px;
    left: -3px;
    background: white;
    border-radius: 100%;
    margin-top: -4px;
  }
  .nav-previewer {
    background: #fff;
    width: 140px;
    height: 120px;
    position: absolute;
    left: 45px;
    bottom: 30px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    border-radius: 0 2px 2px 0;
    padding: 1px;
    z-index: 9;
    cursor: crosshair;
    transition: -webkit-transform 0.7s 0.1s ease;
    transition: transform 0.7s 0.1s ease;
  }
  .nav-previewer.grab {
    cursor: move;
    cursor: -webkit-grabbing;
    cursor: -moz-grabbing;
    cursor: grabbing;
  }
`;
