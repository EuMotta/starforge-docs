import React from 'react';

import { TypographyVariant1 } from '@/components/star-forge';

const TextVariant = () => {
  return (
    <section className="py-2">
      <TypographyVariant1 variant="header">
        Example text for &lt;header&gt;
      </TypographyVariant1>
      <TypographyVariant1 variant="h1">
        Example text for &lt;h1&gt;
      </TypographyVariant1>
      <TypographyVariant1 variant="h2">
        Example text for &lt;h2&gt;
      </TypographyVariant1>
      <TypographyVariant1 variant="h3">
        Example text for &lt;h3&gt;
      </TypographyVariant1>
      <TypographyVariant1 variant="h4">
        Example text for &lt;h4&gt;
      </TypographyVariant1>
      <TypographyVariant1 variant="h5">
        Example text for &lt;h5&gt;
      </TypographyVariant1>
      <TypographyVariant1 variant="h6">
        Example text for &lt;h6&gt;
      </TypographyVariant1>
      <TypographyVariant1 variant="p">
        Example text for &lt;p&gt;
      </TypographyVariant1>

      <div className="flex flex-col">
        <TypographyVariant1 variant="span">
          Example text for &lt;span&gt;
        </TypographyVariant1>

        <TypographyVariant1 variant="a" href="#">
          Example text for &lt;a&gt;
        </TypographyVariant1>

        <TypographyVariant1 variant="small">
          Example text for &lt;small&gt;
        </TypographyVariant1>

        <TypographyVariant1 variant="strong">
          Example text for &lt;strong&gt;
        </TypographyVariant1>

        <TypographyVariant1 variant="em">
          Example text for &lt;em&gt;
        </TypographyVariant1>

        <TypographyVariant1 variant="blockquote">
          Example text for &lt;blockquote&gt;
        </TypographyVariant1>

        <TypographyVariant1 variant="cite">
          Example text for &lt;cite&gt;
        </TypographyVariant1>
        <TypographyVariant1 variant="q">
          Example text for &lt;q&gt;
        </TypographyVariant1>
        <TypographyVariant1 variant="abbr" title="HyperText Markup Language">
          HTML
        </TypographyVariant1>

        <TypographyVariant1 variant="del">
          Example text for &lt;del&gt;
        </TypographyVariant1>
        <TypographyVariant1 variant="ins">
          Example text for &lt;ins&gt;
        </TypographyVariant1>
      </div>
    </section>
  );
};

export default TextVariant;
