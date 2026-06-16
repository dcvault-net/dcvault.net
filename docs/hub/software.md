---
title: "Hub software"
description: "An overview of Direct Connect hub software such as Verlihub, PtokaX, ADCH++, and others."
sidebar_position: 2
hide_table_of_contents: true
---

import {HubTable} from '@site/src/components/HubTable';

Your first choice is the protocol. [NMDC](/docs/protocols/nmdc) is the older protocol and [ADC](/docs/protocols/adc) is the newer, cleaner one, but plenty of hubs and users still run NMDC, so both are valid choices. After that, pick by platform and by the scripting language you want to extend the hub with.

<HubTable
  labels={{
    software: 'Software',
    windows: 'Windows',
    linux: 'Linux',
    nmdc: 'NMDC',
    adc: 'ADC',
    scripting: 'Scripting',
    license: 'License',
    status: 'Status',
    download: 'Download',
    active: 'Active',
    inactive: 'Inactive',
    yes: 'Yes',
    no: 'No',
  }}
/>

Active projects are listed first, then software that is no longer actively developed but still widely run. Once you have chosen, move on to [installation & config](/docs/hub/installation-config).
