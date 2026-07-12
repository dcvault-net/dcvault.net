import React from 'react';
import type {ReactNode} from 'react';
import Copyright from '@theme-original/Footer/Copyright';
import type CopyrightType from '@theme/Footer/Copyright';
import type {WrapperProps} from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = WrapperProps<typeof CopyrightType>;

// Wraps the default footer copyright to append a small build identifier: the
// deployed commit, linked to it on GitHub. The SHA is provided by
// siteConfig.customFields (set in docusaurus.config.ts at build time), so it
// renders the same in every locale.
export default function CopyrightWrapper(props: Props): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const sha = siteConfig.customFields?.buildSha as string | undefined;
  const full = (siteConfig.customFields?.buildShaFull as string | undefined) ?? sha;

  return (
    <>
      <Copyright {...props} />
      {sha ? (
        <div className="footer__version">
          <a
            href={`https://github.com/dcvault-net/dcvault.net/commit/${full}`}
            target="_blank"
            rel="noopener noreferrer">
            build {sha}
          </a>
        </div>
      ) : null}
    </>
  );
}
