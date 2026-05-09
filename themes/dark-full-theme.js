// SOGo Custom Dark Theme - Activates with dark mode browser preference
// Repository: https://code.rebxd.com/numbered.dev/sogo-dark-theme
// License: MIT
(function () {
    "use strict";

    const css = `
    :root {
        color-scheme: light dark;
        --sogo-text-primary: #e0e0e0;
    }

    .sg-selected,
    .md-default-theme.md-background.md-bg,
    .md-default-theme.md-background.md-hue-1.md-bg {
        color: var(--sogo-text-primary) !important;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            color-scheme: dark;

            --sogo-bg-darkest: #1a1a1a;
            --sogo-bg-dark: #252525;
            --sogo-bg-medium: #2d2d2d;
            --sogo-bg-light: #333333;
            --sogo-bg-lighter: #3d3d3d;
            --sogo-bg-hover: #333333;
            --sogo-bg-selected: #404040;

            --sogo-accent: #3d5afe;
            --sogo-accent-hover: #536dfe;
            --sogo-link: #6d9eeb;

            --sogo-text-primary: #e0e0e0;
            --sogo-text-secondary: #aaaaaa;
            --sogo-text-muted: #888888;
            --sogo-text-disabled: rgba(255, 255, 255, 0.26);
            --sogo-text-on-accent: #ffffff;

            --sogo-border-dark: #333333;
            --sogo-border-medium: #444444;
            --sogo-border-light: #555555;
            --sogo-border-input: #555555;

            --sogo-chip-bg: #444444;
            --sogo-avatar-bg: #444444;
            --sogo-toast-bg: #333333;
            --sogo-calendar-out-of-day: #303030;
        }

        body,
 .layout-fill {
     background-color: var(--sogo-bg-darkest) !important;
     color: var(--sogo-text-primary) !important;
 }

 .md-sidenav-left,
 md-sidenav,
 md-sidenav md-content,
 .sg-folder-tree,
 [ui-view="mailboxes"],
 .sg-account-section {
     background-color: var(--sogo-bg-dark) !important;
 }

 md-sidenav > md-content {
     background-color: var(--sogo-bg-dark) !important;
     flex: 1 !important;
 }

 md-sidenav._md-locked-open {
     min-height: 100% !important;
     height: 100% !important;
 }

 .bg-folder-icons {
     background-color: var(--sogo-bg-medium) !important;
 }

 md-list-item.md-clickable.sg-active,
 .sg-folder-selected {
     background-color: var(--sogo-accent) !important;
     color: var(--sogo-text-on-accent) !important;
 }

 md-list-item.md-clickable.sg-active *,
 .sg-folder-selected * {
     color: var(--sogo-text-on-accent) !important;
 }

 .md-toolbar,
 md-toolbar {
     background-color: var(--sogo-bg-medium) !important;
     color: var(--sogo-text-primary) !important;
 }

 md-toolbar.md-hue-1:not(.md-menu-toolbar).md-accent,
 md-toolbar.md-hue-1:not(.md-menu-toolbar).md-accent md-input-container[md-no-float] .md-input {
     background-color: var(--sogo-bg-dark) !important;
 }

 md-toolbar.md-default-theme:not(.md-menu-toolbar) .md-button[disabled] md-icon:not(.msg-body md-icon),
 md-toolbar:not(.md-menu-toolbar) .md-button[disabled] md-icon:not(.msg-body md-icon) {
     color: var(--sogo-text-disabled) !important;
 }

 md-content,
 .md-content {
     background-color: var(--sogo-bg-darkest) !important;
     color: var(--sogo-text-primary) !important;
 }

 md-card:not(.msg-body md-card),
 .md-card:not(.msg-body .md-card) {
     background-color: var(--sogo-bg-medium) !important;
     color: var(--sogo-text-primary) !important;
 }

 [md-colors] {
     background-color: var(--sogo-bg-medium) !important;
 }

 .md-subheader {
     background-color: var(--sogo-bg-dark) !important;
     color: var(--sogo-text-secondary) !important;
 }

 [md-virtual-repeat-container],
 md-virtual-repeat-container {
     background-color: var(--sogo-bg-darkest) !important;
 }

 #messagesList > md-virtual-repeat-container {
 background-color: var(--sogo-bg-dark) !important;
 }

 md-list-item,
 .md-list-item {
     background-color: transparent !important;
     color: var(--sogo-text-primary) !important;
 }

 md-list-item:hover,
 .md-list-item:hover {
     background-color: var(--sogo-bg-hover) !important;
 }

 .md-default-theme.md-hue-2.md-bg {
     background-color: var(--sogo-bg-selected) !important;
     color: var(--sogo-text-on-accent) !important;
 }

 .sg-item-selected,
 .selected,
 md-list-item.selected,
 md-list-item.sg-item-selected,
 .sg-message-list md-list-item.sg-item-selected,
 [md-virtual-repeat] md-list-item.sg-item-selected {
     background-color: var(--sogo-accent) !important;
     color: var(--sogo-text-on-accent) !important;
 }

 .sg-item-selected *,
 .selected *,
 md-list-item.selected *,
 md-list-item.sg-item-selected *,
 .sg-message-list md-list-item.sg-item-selected *,
 [md-virtual-repeat] md-list-item.sg-item-selected * {
     color: var(--sogo-text-on-accent) !important;
 }

 .sg-selected,
 .md-default-theme.md-background.md-bg {
     font-weight: bold !important;
     color: white !important;
 }

 .sg-message-list-container,
 [ui-view="mailbox"] {
     background-color: var(--sogo-bg-darkest) !important;
 }

 .sg-folder-name,
 .sg-mail-subject,
 .sg-mail-from,
 .sg-mail-date {
     color: var(--sogo-text-primary) !important;
 }

 .unread .sg-mail-subject {
     color: var(--sogo-text-on-accent) !important;
     font-weight: bold !important;
 }

 [sg-message] > md-card,
 .sg-message-card {
     background-color: #1e1e1e !important;
     border: 1px solid var(--sogo-border-dark) !important;
     border-radius: 8px !important;
     overflow: hidden !important;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
 }

 .sg-message-header,
 .msg-header,
 [sg-message] > md-card > md-card-content:first-child {
     background-color: #262626 !important;
     border-bottom: 1px solid var(--sogo-accent) !important;
     margin-bottom: 0 !important;
 }

 .sg-message-subject,
 .msg-subject,
 h4.sg-md-title {
     color: var(--sogo-text-on-accent) !important;
     font-size: 1.3em !important;
     font-weight: 500 !important;
     margin-bottom: 8px !important;
 }

 .sg-message-date,
 .msg-date {
     color: var(--sogo-text-muted) !important;
     font-size: 0.9em !important;
 }

 .sg-message-from,
 .msg-from,
 .sg-avatar-list {
     background-color: #2a2a2a !important;
     padding: 12px 16px !important;
     border-radius: 6px !important;
     margin: 12px 0 !important;
     border-left: 3px solid var(--sogo-accent) !important;
 }

 .sg-message-to,
 .msg-to,
 .sg-message-recipients {
     background-color: #242424 !important;
     padding: 10px 16px !important;
     border-radius: 4px !important;
     margin: 8px 0 !important;
     border: 1px solid var(--sogo-border-dark) !important;
 }

 .sg-message-tags,
 .msg-tags,
 [sg-tags] {
     background-color: #242424 !important;
     padding: 8px 16px !important;
     border-bottom: 1px solid var(--sogo-border-dark) !important;
 }

 /* Received email body dark mode */
 .mailer_mailcontent,
 .sg-message-body,
 [sg-message] .sg-message-body,
 div:has(> .msg-body),
 .msg-body {
     color-scheme: dark !important;
     background-color: var(--sogo-bg-darkest) !important;
     color: var(--sogo-text-primary) !important;
     overflow: auto;
 }

 .msg-body {
     padding: 0;
     margin-inline: 16px;
     padding-block: 16px;
 }

 .msg-body *,
 .mailer_mailcontent * {
     color: var(--sogo-text-primary) !important;
     background-color: transparent !important;
     border-color: var(--sogo-border-medium) !important;
 }

 .msg-body a,
 .mailer_mailcontent a {
     color: var(--sogo-link) !important;
 }

 .msg-body img,
 .mailer_mailcontent img {
     background-color: transparent !important;
 }

 .sg-message-toolbar,
 [sg-message] md-toolbar {
     background-color: var(--sogo-bg-medium) !important;
     border-bottom: 1px solid #3a3a3a !important;
 }

 .sg-no-message,
 [ng-if="mailbox.selectedMessage === null"] {
     color: #666666 !important;
     font-style: italic !important;
 }

 .sg-attachments,
 .sg-message-attachments,
 .msg-attachments,
 md-card.sg-attachment,
 .sg-attachment,
 .attachment {
     background-color: var(--sogo-bg-medium) !important;
     color: var(--sogo-text-primary) !important;
     border-color: var(--sogo-border-medium) !important;
 }

 .sg-attachment,
 .attachment {
     border: 1px solid var(--sogo-border-medium) !important;
     border-radius: 4px !important;
     padding: 8px 12px !important;
     margin: 4px !important;
     transition: background-color 0.2s ease !important;
 }

 .sg-attachment:hover,
 .attachment:hover {
     background-color: var(--sogo-bg-lighter) !important;
     border-color: var(--sogo-accent) !important;
 }

 #detailView > md-content > div {
 background-color: rgba(0, 0, 0, 0) !important;
 }

 md-menu-content,
 .md-menu-content {
     background-color: var(--sogo-bg-medium) !important;
 }

 md-menu-item,
 .md-menu-item {
     color: var(--sogo-text-primary) !important;
 }

 md-menu-item:hover {
     background-color: var(--sogo-bg-lighter) !important;
 }

 md-select,
 .md-select-value {
     color: var(--sogo-text-primary) !important;
     background-color: rgba(0, 0, 0, 0) !important;
 }

 md-select-menu,
 md-option {
     background-color: var(--sogo-bg-medium) !important;
     color: var(--sogo-text-primary) !important;
 }

 md-option:hover {
     background-color: var(--sogo-bg-lighter) !important;
 }

 md-select.md-default-theme .md-select-value,
 md-select .md-select-value {
     border-bottom-color: rgba(255, 255, 255, 0.12) !important;
 }

 md-select.md-default-theme .md-select-icon,
 md-select .md-select-icon {
     color: rgba(255, 255, 255, 0.4) !important;
 }

 md-dialog,
 .md-dialog {
     background-color: var(--sogo-bg-medium) !important;
     color: var(--sogo-text-primary) !important;
 }

 .md-toast-content {
     background-color: var(--sogo-toast-bg) !important;
     color: var(--sogo-text-primary) !important;
 }

 md-input-container input,
 md-input-container textarea,
 input,
 textarea {
     color: var(--sogo-text-primary) !important;
     background-color: rgba(0, 0, 0, 0) !important;
     border-color: var(--sogo-border-input) !important;
 }

 md-input-container label {
     color: var(--sogo-text-secondary) !important;
 }

 input::placeholder,
 textarea::placeholder {
     color: var(--sogo-text-secondary) !important;
 }

 .button-label,
 .pseudo-input-label {
     color: rgba(255, 255, 255, 0.54) !important;
 }

 .sg-has-form-sections {
     background-color: #202020 !important;
 }

 .sg-form-section {
     background-color: var(--sogo-bg-dark) !important;
 }

 md-checkbox .md-container {
     border-color: #666666 !important;
 }

 md-checkbox.md-default-theme:not(.md-checked) .md-icon:not(.msg-body md-icon),
 md-checkbox:not(.md-checked) .md-icon:not(.msg-body md-icon) {
     border-color: rgba(255, 255, 255, 0.2) !important;
 }

 md-radio-button.md-default-theme .md-off,
 md-radio-button .md-off {
     color: rgba(255, 255, 255, 0.4) !important;
 }

 md-radio-button.md-default-theme:not(.md-checked) .md-off,
 md-radio-button:not(.md-checked) .md-off {
     border-color: rgba(255, 255, 255, 0.4) !important;
 }

 md-slider.md-default-theme .md-track-ticks,
 md-slider .md-track-ticks {
     color: rgba(255, 255, 255, 0.87) !important;
 }

 md-slider.md-default-theme .md-track:not(.md-track-fill),
 md-slider .md-track:not(.md-track-fill) {
     background-color: rgba(255, 255, 255, 0.38) !important;
 }

 md-slider.md-default-theme.md-min[md-discrete] .md-thumb:after,
 md-slider.md-min[md-discrete] .md-thumb:after {
     background-color: var(--sogo-text-on-accent) !important;
 }

 .md-autocomplete-standard-list-container.md-default-theme .md-autocomplete-suggestion,
 .md-autocomplete-standard-list-container .md-autocomplete-suggestion,
 .md-autocomplete-suggestions-container.md-default-theme .md-autocomplete-suggestion,
 .md-autocomplete-suggestions-container .md-autocomplete-suggestion {
     color: rgba(255, 255, 255, 0.8) !important;
 }

 md-autocomplete.md-margin.md-default-theme.md-bg.md-hue-1.ng-isolate-scope.flex {
     background-color: var(--sogo-accent) !important;
 }

 md-autocomplete.md-margin.md-default-theme.md-bg.md-hue-1.ng-isolate-scope.flex input::placeholder {
     color: rgba(255, 255, 255, 0.8) !important;
 }

 md-autocomplete.md-margin.md-default-theme.md-bg.md-hue-1.ng-isolate-scope.flex button.ng-scope {
     filter: brightness(2);
 }

 .md-button {
     color: var(--sogo-text-primary) !important;
 }

 .md-button.md-primary {
     background-color: var(--sogo-accent) !important;
 }

 md-fab-speed-dial md-fab-actions button {
     background-color: #363636 !important;
 }

 md-chip {
     background-color: var(--sogo-chip-bg) !important;
     color: var(--sogo-text-primary) !important;
 }

 .md-chips md-chip .md-chip-remove md-icon:not(.msg-body md-icon) {
     color: rgba(255, 255, 255, 0.54) !important;
     fill: rgba(255, 255, 255, 0.54) !important;
 }

 md-tabs.md-default-theme .md-tab:not(.md-active),
 md-tabs .md-tab:not(.md-active) {
     color: rgba(255, 255, 255, 0.4) !important;
 }

 table:not(.msg-body table),
 th:not(.msg-body th),
 td:not(.msg-body td) {
     border-color: var(--sogo-border-medium) !important;
     color: var(--sogo-text-primary) !important;
 }

 tr:not(.msg-body tr):hover {
     background-color: var(--sogo-bg-hover) !important;
 }

 a:not(.msg-body a) {
     color: var(--sogo-link) !important;
 }

 hr:not(.msg-body hr) {
     border-color: var(--sogo-border-medium) !important;
 }

 md-icon:not(.msg-body md-icon):not([style*="color"]) {
     color: var(--sogo-text-primary) !important;
 }

 .md-avatar {
     background-color: var(--sogo-avatar-bg) !important;
 }

 .md-default-theme.md-primary.md-fg {
     color: rgba(255, 255, 255, 0.6) !important;
 }

 [ui-view=calendars] .days .day .clickableHourCell.outOfDay {
     background-color: var(--sogo-calendar-out-of-day) !important;
 }

 [ui-view=calendars] .days .day {
     border-color: #707070 !important;
 }

 [ui-view=calendars] .days .day .clickableHourCell,
 [ui-view=calendars] .allDaysView,
 [ui-view=calendars] .hours .hour,
 [ui-view=calendars] .minutes30 {
     border-bottom-color: #505050 !important;
 }

 [ui-view=calendars] .allDaysView,
 [ui-view=calendars] .allDaysView--sidenav {
     border-bottom-color: #707070 !important;
 }

 [ui-view=calendars] md-toolbar.daysView .days.dayLabels .day,
 [ui-view=calendars] md-toolbar.monthView .days.dayLabels .day {
     color: var(--sogo-text-on-accent) !important;
 }

 .md-datepicker-calendar {
     background-color: #151515 !important;
 }

 .md-default-theme .md-datepicker-input-mask-opaque,
 .md-datepicker-input-mask-opaque {
     box-shadow: none !important;
 }

 .sg-timepicker-input-mask,
 .md-datepicker-input-mask {
     display: none !important;
 }

 .md-default-theme .md-datepicker-calendar-pane,
 .sg-timepicker-time-pane,
 .hours-pane,
 .md-datepicker-calendar-pane {
     border-color: #414141 !important;
 }

 .hours-pane,
 .min1,
 .min5 {
     padding-block: 8px !important;
 }

 .sg-time-selected,
 .md-focus .md-calendar-date-selection-indicator {
     background-color: var(--sogo-accent) !important;
 }

 [aria-selected="true"] .md-calendar-date-selection-indicator {
     background-color: rgba(255, 255, 255, 0.15) !important;
 }

 .sg-time-pane,
 md-calendar table tbody {
     background-color: #202020 !important;
 }

 .md-default-theme .md-calendar,
 .md-calendar {
     background: none !important;
 }

 .sg-timepicker-time,
 .sg-timepicker-open .sg-timepicker-input-container,
 .md-default-theme .md-datepicker-open .md-datepicker-input-container,
 .md-datepicker-open .md-datepicker-input-container {
     background: none !important;
 }

 .sg-timepicker-triangle-button .sg-timepicker-expand-triangle,
 .md-default-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle,
 .md-datepicker-triangle-button .md-datepicker-expand-triangle {
     border-top-color: rgba(255, 255, 255, 0.4) !important;
 }

 /* Compose editor dark mode */
 .ck.ck-editor,
 .ck.ck-editor__main,
 .ck.ck-content,
 .ck.ck-editor__editable,
 .ck.ck-editor__editable_inline {
     background-color: var(--sogo-bg-darkest) !important;
     color: var(--sogo-text-primary) !important;
 }

 .ck.ck-content *,
 .ck.ck-editor__editable * {
     color: var(--sogo-text-primary) !important;
     background-color: transparent !important;
 }

 .ck.ck-toolbar,
 .ck.ck-toolbar__items,
 .ck.ck-button {
     background-color: var(--sogo-bg-medium) !important;
     color: var(--sogo-text-primary) !important;
     border-color: var(--sogo-border-medium) !important;
 }

 .ck.ck-button svg,
 .ck.ck-icon {
     color: var(--sogo-text-primary) !important;
     fill: var(--sogo-text-primary) !important;
 }

 md-autocomplete.md-margin.md-default-theme.md-bg.md-hue-1.flex {
     background-color: var(--sogo-bg-dark) !important;
 }

 .sg-quota md-progress-linear > .md-container {
     opacity: 0.67 !important;
     height: 2px !important;
 }

 ::-webkit-scrollbar {
     width: 8px;
     height: 8px;
 }

 ::-webkit-scrollbar-track {
     background: var(--sogo-bg-darkest);
 }

 ::-webkit-scrollbar-thumb {
     background: var(--sogo-border-light);
     border-radius: 4px;
 }

 ::-webkit-scrollbar-thumb:hover {
     background: #666666;
 }
    }
    `;

    window.SOGoThemeLoader.applyTheme(css);
})();
