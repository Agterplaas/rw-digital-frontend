import { ReactNode } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, ButtonProps } from 'primereact/button';

type PropType = {
  iconOnly?: boolean;
} & ButtonProps;

const iconTemplate = (): ReactNode => (
  <Icon
    icon="flowbite:printer-outline"
    className="h-5 w-5"
  />
);

function PrintExcel(props: PropType) {
  const { iconOnly, ...buttonProps } = props;

  return (
    <Button
      icon={iconTemplate}
      label={!iconOnly ? 'Cetak Excel' : undefined}
      ptOptions={{ mergeProps: true }}
      severity="success"
      size="small"
      tooltip={iconOnly ? props.tooltip ?? 'Cetak Excel' : undefined}
      tooltipOptions={{ position: 'top' }}
      pt={{
        root: { className: ['gap-2', iconOnly ? 'p-1 aspect-square w-fit' : ''] },
        label: { className: ['font-normal', iconOnly ? 'hidden' : ''] }
      }}
      {...buttonProps}
    />
  );
}

export default PrintExcel;
