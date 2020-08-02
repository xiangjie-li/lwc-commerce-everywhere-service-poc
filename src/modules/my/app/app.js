import { LightningElement } from 'lwc';
import { navigationItems, navigationElements } from './navigation';

export default class App extends LightningElement {
    currentNavigationItem = 'home';
    navigationItems = navigationItems;
    navigationElements = navigationElements;
    _isWindowHistoryUpdate = false;

    connectedCallback() {
        let that = this;
        window.onpopstate = function (event) {
            if (event.state && event.state.page) {
                that._isWindowHistoryUpdate = true;
                that.navigationItems[
                    that.currentNavigationItem
                ].visible = false;
                that.currentNavigationItem = event.state.page;
                that.hideCurrentNavigationItemFromNav();
                that.handleCategoryChange();
            }
        };
        if (window.location.hash) {
            const location = window.location.hash.substring(
                1,
                window.location.hash.length
            );
            if (this.navigationElements.indexOf(location) > -1) {
                this.currentNavigationItem = location;
                window.history.replaceState({ page: location }, null, '');
            }
        } else {
            window.history.replaceState(
                { page: this.currentNavigationItem },
                null,
                ''
            );
        }
        this.navigationItems[this.currentNavigationItem].visible = true;
    }

    handleCategoryChange(event) {
        if (event) {
            if (this.currentNavigationItem !== event.detail) {
                this.navigationItems[
                    this.currentNavigationItem
                ].visible = false;
                this.currentNavigationItem = event.detail;
            } else {
                return;
            }
        }
        this.scrollAndLocation();
        this.navigationItems[this.currentNavigationItem].visible = true;
    }

    scrollAndLocation() {
        if (!this._isWindowHistoryUpdate) {
            window.history.pushState(
                { page: this.currentNavigationItem },
                null,
                '#'.concat(this.currentNavigationItem)
            );
        }
        this._isWindowHistoryUpdate = false;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    hideCurrentNavigationItemFromNav() {
        this.navigationItems[
            this.navigationElements[
                this.navigationElements.indexOf(this.currentNavigationItem)
            ]
        ].visible = false;
    }
}
