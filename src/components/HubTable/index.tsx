import React from 'react';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {Icon} from '../Home';
import styles from './styles.module.css';

type Labels = {
  software: string;
  windows: string;
  linux: string;
  nmdc: string;
  adc: string;
  scripting: string;
  license: string;
  status: string;
  download: string;
  active: string;
  inactive: string;
  yes: string;
  no: string;
};

type Hub = {
  name: string;
  win: boolean;
  linux: boolean;
  nmdc: boolean;
  adc: boolean;
  scripting: string;
  license: string;
  active: boolean;
  url?: string;
};

// Language-neutral data. Active projects first, then ones that are no longer
// actively developed but still widely run.
const HUBS: Hub[] = [
  {name: 'Verlihub', win: false, linux: true, nmdc: true, adc: false, scripting: 'Lua, C++', license: 'GPL-3', active: true, url: 'https://github.com/Verlihub/verlihub'},
  {name: 'ADCH++', win: true, linux: true, nmdc: false, adc: true, scripting: 'Lua, Python', license: 'GPL-3', active: true, url: 'https://adchpp.sourceforge.io/'},
  {name: 'Luadch-ng', win: true, linux: true, nmdc: false, adc: true, scripting: 'Lua 5.4', license: 'GPL-3', active: true, url: 'https://luadch-ng.github.io/'},
  {name: 'uHub', win: true, linux: true, nmdc: false, adc: true, scripting: 'C', license: 'GPL-3', active: true, url: 'https://github.com/janvidar/uhub/'},
  {name: 'PtokaX', win: true, linux: true, nmdc: true, adc: false, scripting: 'Lua', license: 'GPL-3', active: false, url: 'https://www.ptokax.org/'},
  {name: 'Luadch', win: true, linux: true, nmdc: false, adc: true, scripting: 'Lua', license: 'GPL-3', active: false, url: 'https://luadch.github.io/'},
  {name: 'FlexHub', win: true, linux: true, nmdc: true, adc: true, scripting: 'Lua', license: 'AGPL-3', active: false, url: 'https://drive.proton.me/urls/TXD22M2FZ4#pZ5wOLvcObWp'},
  {name: 'YnHub', win: true, linux: false, nmdc: true, adc: false, scripting: '—', license: 'Freeware', active: false, url: 'https://drive.proton.me/urls/NMSHKDD910#KEhPjogea6mf'},
];

function Bool({value, labels}: {value: boolean; labels: Labels}): ReactNode {
  return value ? (
    <span className={styles.yes} title={labels.yes} aria-label={labels.yes}>
      <Icon name="check" />
    </span>
  ) : (
    <span className={styles.no} title={labels.no} aria-label={labels.no}>
      <Icon name="x" />
    </span>
  );
}

export function HubTable({labels}: {labels: Labels}): ReactNode {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{labels.software}</th>
            <th className={styles.center}>{labels.windows}</th>
            <th className={styles.center}>{labels.linux}</th>
            <th className={styles.center}>{labels.nmdc}</th>
            <th className={styles.center}>{labels.adc}</th>
            <th>{labels.scripting}</th>
            <th>{labels.license}</th>
            <th>{labels.status}</th>
            <th>{labels.download}</th>
          </tr>
        </thead>
        <tbody>
          {HUBS.map((h) => (
            <tr key={h.name}>
              <td className={styles.name}>{h.name}</td>
              <td className={styles.center}><Bool value={h.win} labels={labels} /></td>
              <td className={styles.center}><Bool value={h.linux} labels={labels} /></td>
              <td className={styles.center}><Bool value={h.nmdc} labels={labels} /></td>
              <td className={styles.center}><Bool value={h.adc} labels={labels} /></td>
              <td>{h.scripting}</td>
              <td>{h.license}</td>
              <td>
                <span className={h.active ? styles.active : styles.inactive}>
                  {h.active ? labels.active : labels.inactive}
                </span>
              </td>
              <td>
                {h.url ? (
                  <Link to={h.url} className={styles.dl}>
                    {labels.download}
                  </Link>
                ) : (
                  <span className={styles.dash}>—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
