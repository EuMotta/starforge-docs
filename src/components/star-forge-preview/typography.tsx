import React from 'react';

import { Typography } from '@/components/star-forge/typography';

const TypographyComponent = () => {
  return (
    <section>
      <Typography.Header>Example text for &lt;header&gt;</Typography.Header>
      <Typography.H1>Example text for &lt;h1&gt;</Typography.H1>
      <Typography.H2>Example text for &lt;h2&gt;</Typography.H2>
      <Typography.H3>Example text for &lt;h3&gt;</Typography.H3>
      <Typography.H4>Example text for &lt;h4&gt;</Typography.H4>
      <Typography.H5>Example text for &lt;h5&gt;</Typography.H5>
      <Typography.H6>Example text for &lt;h6&gt;</Typography.H6>
      <Typography.P>Example text for &lt;p&gt;</Typography.P>

      <div className="flex flex-col">
        <Typography.Span>Example text for &lt;span&gt;</Typography.Span>
        <Typography.Link href="#">Example text for &lt;a&gt;</Typography.Link>
        <Typography.Small>Example text for &lt;small&gt;</Typography.Small>
        <Typography.Strong>Example text for &lt;strong&gt;</Typography.Strong>
        <Typography.Em>Example text for &lt;em&gt;</Typography.Em>
        <Typography.Blockquote>
          Example text for &lt;blockquote&gt;
        </Typography.Blockquote>
        <Typography.Cite>Example text for &lt;cite&gt;</Typography.Cite>
        <Typography.Q>Example text for &lt;q&gt;</Typography.Q>
        <Typography.Abbr title="HyperText Markup Language">
          HTML
        </Typography.Abbr>
        <Typography.Del>Example text for &lt;del&gt;</Typography.Del>
        <Typography.Ins>Example text for &lt;ins&gt;</Typography.Ins>
      </div>
    </section>
  );
};

export default TypographyComponent;
