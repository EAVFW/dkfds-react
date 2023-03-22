import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon, IconsProvider } from './Icons';

export default {
    title: 'DKFDS/Icons',
    component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => {
    return (
        <>
            <IconsProvider />
            <Icon icon="accessibility-new" /> accessibility-new
            <br /><Icon icon="account-circle" /> account-circle
            <br /><Icon icon="add-a-photo" /> add-a-photo
            <br /><Icon icon="add" /> add
            <br /><Icon icon="agriculture" /> agriculture
            <br /><Icon icon="apps" /> apps
            <br /><Icon icon="arrow-back" /> arrow-back
            <br /><Icon icon="arrow-downward" /> arrow-downward
            <br /><Icon icon="arrow-drop-down" /> arrow-drop-down
            <br /><Icon icon="arrow-drop-up" /> arrow-drop-up
            <br /><Icon icon="arrow-forward" /> arrow-forward
            <br /><Icon icon="arrow-left" /> arrow-left
            <br /><Icon icon="arrow-right" /> arrow-right
            <br /><Icon icon="arrow-upward" /> arrow-upward
            <br /><Icon icon="assessment" /> assessment
            <br /><Icon icon="assignment" /> assignment
            <br /><Icon icon="attach-file" /> attach-file
            <br /><Icon icon="bookmark-border" /> bookmark-border
            <br /><Icon icon="bookmarks" /> bookmarks
            <br /><Icon icon="cached" /> cached
            <br /><Icon icon="calculator" /> calculator
            <br /><Icon icon="card-account-details" /> card-account-details
            <br /><Icon icon="card-text" /> card-text
            <br /><Icon icon="chat" /> chat
            <br /><Icon icon="check-circle" /> check-circle
            <br /><Icon icon="chevron-double-left" /> chevron-double-left
            <br /><Icon icon="chevron-double-right" /> chevron-double-right
            <br /><Icon icon="chevron-left" /> chevron-left
            <br /><Icon icon="chevron-right" /> chevron-right
            <br /><Icon icon="close" /> close
            <br /><Icon icon="construction" /> construction
            <br /><Icon icon="contact-support" /> contact-support
            <br /><Icon icon="content-copy" /> content-copy
            <br /><Icon icon="coronavirus" /> coronavirus
            <br /><Icon icon="create-new-folder" /> create-new-folder
            <br /><Icon icon="credit-card" /> credit-card
            <br /><Icon icon="database" /> database
            <br /><Icon icon="delete" /> delete
            <br /><Icon icon="desktop-windows" /> desktop-windows
            <br /><Icon icon="domain" /> domain
            <br /><Icon icon="done" /> done
            <br /><Icon icon="download-done" /> download-done
            <br /><Icon icon="drive-eta" /> drive-eta
            <br /><Icon icon="email" /> email
            <br /><Icon icon="engineering" /> engineering
            <br /><Icon icon="expand-less" /> expand-less
            <br /><Icon icon="expand-more" /> expand-more
            <br /><Icon icon="face" /> face
            <br /><Icon icon="feedback" /> feedback
            <br /><Icon icon="file-download" /> file-download
            <br /><Icon icon="file-excel" /> file-excel
            <br /><Icon icon="file-image" /> file-image
            <br /><Icon icon="file-pdf" /> file-pdf
            <br /><Icon icon="file-upload" /> file-upload
            <br /><Icon icon="file-word" /> file-word
            <br /><Icon icon="first-page" /> first-page
            <br /><Icon icon="flag" /> flag
            <br /><Icon icon="folder-open" /> folder-open
            <br /><Icon icon="folder" /> folder
            <br /><Icon icon="format-align-center" /> format-align-center
            <br /><Icon icon="format-align-justify" /> format-align-justify
            <br /><Icon icon="format-align-left" /> format-align-left
            <br /><Icon icon="format-align-right" /> format-align-right
            <br /><Icon icon="format-bold" /> format-bold
            <br /><Icon icon="format-clear" /> format-clear
            <br /><Icon icon="format-color-fill" /> format-color-fill
            <br /><Icon icon="format-color-text" /> format-color-text
            <br /><Icon icon="format-indent-decrease" /> format-indent-decrease
            <br /><Icon icon="format-indent-increase" /> format-indent-increase
            <br /><Icon icon="format-italic" /> format-italic
            <br /><Icon icon="format-list-bulleted" /> format-list-bulleted
            <br /><Icon icon="format-list-checks" /> format-list-checks
            <br /><Icon icon="format-list-numbered" /> format-list-numbered
            <br /><Icon icon="format-size" /> format-size
            <br /><Icon icon="format-underlined" /> format-underlined
            <br /><Icon icon="forum" /> forum
            <br /><Icon icon="forward" /> forward
            <br /><Icon icon="fullscreen-exit" /> fullscreen-exit
            <br /><Icon icon="fullscreen" /> fullscreen
            <br /><Icon icon="grade-outline" /> grade-outline
            <br /><Icon icon="grade" /> grade
            <br /><Icon icon="groups" /> groups
            <br /><Icon icon="headphones" /> headphones
            <br /><Icon icon="help" /> help
            <br /><Icon icon="highlight-off" /> highlight-off
            <br /><Icon icon="home" /> home
            <br /><Icon icon="hourglass-empty" /> hourglass-empty
            <br /><Icon icon="how-to-reg" /> how-to-reg
            <br /><Icon icon="info" /> info
            <br /><Icon icon="insert-drive-file" /> insert-drive-file
            <br /><Icon icon="insert-invitation" /> insert-invitation
            <br /><Icon icon="language" /> language
            <br /><Icon icon="laptop" /> laptop
            <br /><Icon icon="last-page" /> last-page
            <br /><Icon icon="link" /> link
            <br /><Icon icon="list-alt" /> list-alt
            <br /><Icon icon="local-shipping" /> local-shipping
            <br /><Icon icon="location-on" /> location-on
            <br /><Icon icon="lock-open" /> lock-open
            <br /><Icon icon="lock" /> lock
            <br /><Icon icon="map" /> map
            <br /><Icon icon="menu" /> menu
            <br /><Icon icon="mode" /> mode
            <br /><Icon icon="more-horiz" /> more-horiz
            <br /><Icon icon="more-vert" /> more-vert
            <br /><Icon icon="mouse" /> mouse
            <br /><Icon icon="note-add" /> note-add
            <br /><Icon icon="notifications" /> notifications
            <br /><Icon icon="open-in-new" /> open-in-new
            <br /><Icon icon="open-with" /> open-with
            <br /><Icon icon="outlined-flag" /> outlined-flag
            <br /><Icon icon="palette" /> palette
            <br /><Icon icon="payments" /> payments
            <br /><Icon icon="people-alt" /> people-alt
            <br /><Icon icon="person-add-alt-1" /> person-add-alt-1
            <br /><Icon icon="person-remove" /> person-remove
            <br /><Icon icon="person" /> person
            <br /><Icon icon="phone-iphone" /> phone-iphone
            <br /><Icon icon="photo-camera" /> photo-camera
            <br /><Icon icon="playlist-add-check" /> playlist-add-check
            <br /><Icon icon="playlist-add" /> playlist-add
            <br /><Icon icon="print" /> print
            <br /><Icon icon="query-builder" /> query-builder
            <br /><Icon icon="refresh" /> refresh
            <br /><Icon icon="remove" /> remove
            <br /><Icon icon="reply" /> reply
            <br /><Icon icon="report-problem" /> report-problem
            <br /><Icon icon="save" /> save
            <br /><Icon icon="school" /> school
            <br /><Icon icon="science" /> science
            <br /><Icon icon="search" /> search
            <br /><Icon icon="send" /> send
            <br /><Icon icon="settings" /> settings
            <br /><Icon icon="share" /> share
            <br /><Icon icon="shopping-cart" /> shopping-cart
            <br /><Icon icon="sort-ascending" /> sort-ascending
            <br /><Icon icon="sort-by-alpha" /> sort-by-alpha
            <br /><Icon icon="sort-default" /> sort-default
            <br /><Icon icon="sort-descending" /> sort-descending
            <br /><Icon icon="sort-table-ascending" /> sort-table-ascending
            <br /><Icon icon="sort-table-descending" /> sort-table-descending
            <br /><Icon icon="sort-table-none" /> sort-table-none
            <br /><Icon icon="sort" /> sort
            <br /><Icon icon="subdirectory-arrow-left" /> subdirectory-arrow-left
            <br /><Icon icon="subdirectory-arrow-right" /> subdirectory-arrow-right
            <br /><Icon icon="support-agent" /> support-agent
            <br /><Icon icon="text-format" /> text-format
            <br /><Icon icon="trash-can" /> trash-can
            <br /><Icon icon="tune" /> tune
            <br /><Icon icon="vertical-split" /> vertical-split
            <br /><Icon icon="videocam" /> videocam
            <br /><Icon icon="view-headline" /> view-headline
            <br /><Icon icon="visibility-off" /> visibility-off
            <br /><Icon icon="visibility" /> visibility
            <br /><Icon icon="zoom-in" /> zoom-in
            <br /><Icon icon="zoom-out" /> zoom-out
        </>
    );
};

export const Showcase = Template.bind({});
