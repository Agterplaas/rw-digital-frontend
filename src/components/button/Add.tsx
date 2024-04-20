import { ReactNode } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, ButtonProps } from 'primereact/button';

type PropType = {
  iconOnly?: boolean;
} & ButtonProps;

const iconTemplate = (): ReactNode => (
  <Icon
    icon="material-symbols:add-rounded"
    className="h-5 w-5"
  />
);

function Add(props: PropType) {
  const { iconOnly, ...buttonProps } = props;

  return (
    <Button
      icon={iconTemplate}
      label={!iconOnly ? 'Tambah' : undefined}
      ptOptions={{ mergeProps: true }}
      severity="danger"
      size="small"
      tooltip={iconOnly ? props.tooltip ?? 'Tambah' : undefined}
      tooltipOptions={{ position: 'top' }}
      pt={{
        root: { className: ['gap-2', iconOnly ? 'p-1 aspect-square w-fit' : ''] },
        label: { className: ['font-normal', iconOnly ? 'hidden' : ''] }
      }}
      {...buttonProps}
    />
  );
}

export default Add;
