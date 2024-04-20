import { ReactNode } from 'react';
import { Button, ButtonProps } from 'primereact/button';
import { Icon } from '@iconify/react/dist/iconify.js';

type PropType = {
  iconOnly?: boolean;
} & ButtonProps;

const iconTemplate = (): ReactNode => (
  <Icon
    icon="ic:baseline-delete"
    className="h-5 w-5"
  />
);

function Delete(props: PropType) {
  const { iconOnly, ...buttonProps } = props;

  return (
    <Button
      icon={iconTemplate}
      label={!iconOnly ? 'Hapus' : undefined}
      ptOptions={{ mergeProps: true }}
      severity="danger"
      size="small"
      tooltip={iconOnly ? props.tooltip ?? 'Hapus' : undefined}
      tooltipOptions={{ position: 'top' }}
      pt={{
        root: { className: ['gap-2', iconOnly ? 'p-1 aspect-square w-fit' : ''] },
        label: { className: ['font-normal', iconOnly ? 'hidden' : ''] }
      }}
      {...buttonProps}
    />
  );
}

export default Delete;
