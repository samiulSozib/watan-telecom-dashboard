/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '@/types';
import { useTranslation } from 'react-i18next';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const {t}=useTranslation()

    const model: AppMenuItem[] = [
        {
            label: '',
            icon: 'pi pi-fw pi-briefcase', // General category icon
            to: '/pages',
            items: [
                {
                    label: t('MENU.DASHBOARD'),
                    icon: 'pi pi-fw pi-home', // Home or main dashboard icon
                    to: '/',
                },
                // {
                //     label: t('MENU.DASHBOARD'),
                //     icon: 'pi pi-fw pi-home', // Home or main dashboard icon
                //     to: '/pages/crud',
                // },
                {
                    label: t('MENU.COMPANY_SERVICES'),
                    icon: 'pi pi-fw pi-sitemap', // Hierarchy or company services
                    items: [
                        {
                            label: t('MENU.COMPANY'),
                            icon: 'pi pi-fw pi-building', // Company or organization icon
                            to: '/pages/companies',
                        },
                        {
                            label: t('MENU.COMPANYCODE'),
                            icon: 'pi pi-fw pi-key', // Code or identifier icon
                            to: '/pages/company-code',
                        },
                        // {
                        //     label: t('MENU.DASHBOARD'),
                        //     icon: 'pi pi-fw pi-cog', // Subcategories or settings icon
                        //     to: '/pages/variations',
                        // },
                        {
                            label: t('MENU.SERVICECATEGORY'),
                            icon: 'pi pi-fw pi-tags', // Tags or categorization icon
                            to: '/pages/service-category',
                        },
                        {
                            label: t('MENU.SERVICE'),
                            icon: 'pi pi-fw pi-box', // Service or package icon
                            to: '/pages/services',
                        },
                        {
                            label: t('MENU.BUNDLE'),
                            icon: 'pi pi-fw pi-database', // Layers or bundles icon
                            to: '/pages/bundle',
                        },
                    ],
                },
                {
                    label: t('MENU.FINANCIALS'),
                    icon: 'pi pi-fw pi-dollar', // Financial or money-related icon
                    items: [
                        {
                            label: t('MENU.MONEYTRANSACTIONS'),
                            icon: 'pi pi-fw pi-wallet', // Wallet for transactions
                            to: '/pages/money-transactions',
                        },
                        {
                            label: t('MENU.PAYMENTMETHOD'),
                            icon: 'pi pi-fw pi-credit-card', // Credit card for payments
                            to: '/pages/payment-method',
                        },

                        {
                            label: t('MENU.PURCHASEDPRODUCTS'),
                            icon: 'pi pi-fw pi-shopping-cart', // Shopping cart for purchases
                            to: '/pages/purchase-products',
                        },
                        {
                            label: t('MENU.PAYMENTS'),
                            icon: 'pi pi-fw pi-money-bill', // Money bill for payments
                            to: '/pages/payment',
                        },
                        {
                            label: t('MENU.BALANCE'),
                            icon: 'pi pi-fw pi-chart-line', // Line chart for balance
                            to: '/pages/balance',
                        },
                    ],
                },
                {
                    label: t('MENU.GEOGRAPHICAL'),
                    icon: 'pi pi-fw pi-globe', // Globe for geographical data
                    items: [
                        {
                            label: t('MENU.COUNTRY'),
                            icon: 'pi pi-fw pi-flag', // Flag for country
                            to: '/pages/country',
                        },
                        {
                            label: t('MENU.PROVINCE'),
                            icon: 'pi pi-fw pi-map', // Map for provinces
                            to: '/pages/province',
                        },
                        {
                            label: t('MENU.DISTRICT'),
                            icon: 'pi pi-fw pi-compass', // Compass for district
                            to: '/pages/district',
                        },
                    ],
                },
                {
                    label: t('MENU.RESELLER'),
                    icon: 'pi pi-fw pi-users', // Group or reseller icon
                    to: '/pages/reseller',
                },
                {
                    label: t('MENU.ORDER'),
                    icon: 'pi pi-fw pi-shopping-bag', // Bag for orders
                    to: '/pages/order',
                },
                {
                    label: t('MENU.LANGUAGE'),
                    icon: 'pi pi-fw pi-globe', // Globe for languages
                    to: '/pages/language',
                },
                {
                    label: t('MENU.CURRENCY'),
                    icon: 'pi pi-fw pi-money-bill', // Money bill for currency
                    to: '/pages/currencies',
                },

                //
                {
                    label: t('MENU.MONEY_TRANSFER_MANAGER'),
                    icon: 'pi pi-fw pi-credit-card', // Globe for geographical data
                    items: [
                        {
                            label: t('MENU.HAWALA_BRANCH'),
                            icon: 'pi pi-fw pi-flag', // Flag for country
                            to: '/pages/hawala-branches',
                        },
                        {
                            label: t('MENU.HAWALAS'),
                            icon: 'pi pi-fw pi-map', // Map for provinces
                            to: '/pages/hawala',
                        }
                    ],
                },
                //
                {
                    label: t('MENU.ADVERTISEMENT'),
                    icon: 'pi pi-list', // Bullhorn for advertisements pi-list
                    to: '/pages/advertisement',
                },
                {
                    label: t('MENU.APPSETTING'),
                    icon: 'pi pi-fw pi-cog', // Cogwheel for settings
                    to: '/pages/general-settings',
                },
                {
                    label: t('MENU.ROLES'),
                    icon: 'pi pi-fw pi-cog', // Cogwheel for settings
                    to: '/pages/roles',
                },
                // {
                //     label: t('MENU.USER_LIST'),
                //     icon: 'pi pi-fw pi-cog', // Cogwheel for settings
                //     to: '/pages/user-list',
                // },
                {
                    label: t('MENU.RESELLER_GROUP'),
                    icon: 'pi pi-fw pi-cog', // Cogwheel for settings
                    to: '/pages/reseller-group',
                },
                {
                    label: t('MENU.GROUP_DISCOUNT'),
                    icon: 'pi pi-fw pi-cog', // Cogwheel for settings
                    to: '/pages/group-discount',
                },
                {
                    label: t('MENU.GROUP_PRICING'),
                    icon: 'pi pi-fw pi-cog', // Cogwheel for settings
                    to: '/pages/group-pricing',
                },
                 {
                    label: t('MENU.USERS_MANAGEMENT'),
                    icon: 'pi pi-fw pi-cog', // Globe for geographical data
                    items: [
                        {
                            label: t('MENU.USER_LIST'),
                            icon: 'pi pi-fw pi-cog', // Cogwheel for settings
                            to: '/pages/user-list',
                        },
                        {
                            label: t('MENU.SUPPLIERS'),
                            icon: 'pi pi-fw pi-truck', // Truck or supplier icon
                            to: '/pages/suppliers',
                        },
                    ],
                },
            ],
        },
    ];


    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}


            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
