import React from 'react';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {Icon} from '../Home';
import styles from './styles.module.css';

type Labels = {
  client: string;
  windows: string;
  linux: string;
  macos: string;
  ui: string;
  license: string;
  status: string;
  download: string;
  active: string;
  inactive: string;
  yes: string;
  no: string;
};

type Client = {
  name: string;
  win: boolean;
  linux: boolean;
  mac: boolean;
  ui: string;
  license: string;
  active: boolean;
  url?: string;
};

// Client data is language-neutral and lives here so both locales share it.
const CLIENTS: Client[] = [
  {name: 'DC++', win: true, linux: false, mac: false, ui: 'GUI', license: 'GPL-3', active: true, url: 'https://dcplusplus.sourceforge.io/'},
  {name: 'AirDC++', win: true, linux: true, mac: false, ui: 'GUI / Web UI', license: 'GPL-3', active: true, url: 'https://airdcpp.net/docs/installation/installation.html'},
  {name: 'FearDC', win: true, linux: false, mac: false, ui: 'GUI', license: 'GPL-3', active: true, url: 'https://client.feardc.net/'},
  {name: 'EiskaltDC++', win: true, linux: true, mac: true, ui: 'GUI', license: 'GPL-3', active: false, url: 'https://github.com/eiskaltdcpp/eiskaltdcpp#packages-and-installers'},
  {name: 'ApexDC++', win: true, linux: false, mac: false, ui: 'GUI', license: 'GPL-2', active: false, url: 'https://www.apexdc.net/download/'},
  {name: 'Ncdc', win: true, linux: true, mac: true, ui: 'CLI / TUI', license: 'MIT', active: false, url: 'https://dev.yorhel.nl/ncdc'},
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

export function ClientTable({labels}: {labels: Labels}): ReactNode {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{labels.client}</th>
            <th className={styles.center}>{labels.windows}</th>
            <th className={styles.center}>{labels.linux}</th>
            <th className={styles.center}>{labels.macos}</th>
            <th>{labels.ui}</th>
            <th>{labels.license}</th>
            <th>{labels.status}</th>
            <th>{labels.download}</th>
          </tr>
        </thead>
        <tbody>
          {CLIENTS.map((c) => (
            <tr key={c.name}>
              <td className={styles.name}>{c.name}</td>
              <td className={styles.center}><Bool value={c.win} labels={labels} /></td>
              <td className={styles.center}><Bool value={c.linux} labels={labels} /></td>
              <td className={styles.center}><Bool value={c.mac} labels={labels} /></td>
              <td>{c.ui}</td>
              <td>{c.license}</td>
              <td>
                <span className={c.active ? styles.active : styles.inactive}>
                  {c.active ? labels.active : labels.inactive}
                </span>
              </td>
              <td>
                {c.url ? (
                  <Link to={c.url} className={styles.dl}>
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
