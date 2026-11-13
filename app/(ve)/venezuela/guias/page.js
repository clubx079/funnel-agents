import GuiasIndex, { guiasMetadata } from '@/components/GuiasIndex';

export const dynamic = 'force-static';

export function generateMetadata() {
  return guiasMetadata('ve');
}

export default function Page() {
  return <GuiasIndex cc="ve" />;
}
